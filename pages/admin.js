import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export async function getServerSideProps({ req }) {
  const token = req.cookies?.admin_token;
  const expected = process.env.ADMIN_TOKEN;

  if (!expected || !token || token !== expected) {
    return { redirect: { destination: "/admin-login", permanent: false } };
  }

  return { props: {} };
}

const CATEGORIES = ["food", "snack", "beverage"];

const emptyForm = {
  name: "",
  price: "",
  category: "food",
  description: "",
  imageKey: "",
};

export default function AdminPage() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ message: "", type: "" });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const showFeedback = (message, type = "success") => {
    setFeedback({ message, type });
    setTimeout(() => setFeedback({ message: "", type: "" }), 3500);
  };

  const loadItems = useCallback(async () => {
    try {
      const res = await fetch("/api/menu");
      if (!res.ok) throw new Error("Failed to load items");
      const data = await res.json();
      setItems(Array.isArray(data) ? data : data.items || []);
    } catch (err) {
      showFeedback(err.message, "error");
    }
  }, []);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageKey = form.imageKey;

      // If a new file was picked, upload it first
      if (imageFile) {
        const presignRes = await fetch("/api/admin/upload-url", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            filename: imageFile.name,
            contentType: imageFile.type,
          }),
        });

        if (!presignRes.ok) {
          const d = await presignRes.json();
          throw new Error(d.error || "Failed to get upload URL");
        }

        const { url, key } = await presignRes.json();

        const uploadRes = await fetch(url, {
          method: "PUT",
          headers: { "Content-Type": imageFile.type },
          body: imageFile,
        });

        if (!uploadRes.ok) throw new Error("Image upload to S3 failed");
        imageKey = key;
      }

      const payload = {
        ...form,
        imageKey,
        price: Number(form.price),
        ...(editingId ? { id: editingId } : {}),
      };

      const res = await fetch("/api/admin/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        const detail = data.upstreamStatus
          ? ` (Lambda ${data.upstreamStatus}: ${JSON.stringify(data.details)})`
          : "";
        throw new Error((data.error || "Request failed") + detail);
      }

      showFeedback(editingId ? "Item updated!" : "Item added!");
      setForm(emptyForm);
      setEditingId(null);
      setImageFile(null);
      setImagePreview("");
      await loadItems();
    } catch (err) {
      showFeedback(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      name: item.name || "",
      price: item.price || "",
      category: item.category || "food",
      description: item.description || "",
      imageKey: item.imageKey || "",
    });
    setImageFile(null);
    setImagePreview(
      item.imageKey
        ? `https://${process.env.NEXT_PUBLIC_S3_BUCKET}.s3.amazonaws.com/${item.imageKey}`
        : ""
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this item?")) return;
    setLoading(true);
    try {
      const res = await fetch("/api/admin/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, _action: "delete" }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Delete failed");
      }

      showFeedback("Item deleted.");
      await loadItems();
    } catch (err) {
      showFeedback(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setForm(emptyForm);
    setEditingId(null);
    setImageFile(null);
    setImagePreview("");
  };

  return (
    <main className="min-h-screen bg-primaryColor text-whiteColor py-12 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-10 flex items-start justify-between">
          <div>
            <h1 className="font-oswald font-bold text-4xl uppercase text-secondaryColor">
              Admin Panel
            </h1>
            <p className="text-paragraphColor mt-1">Manage menu items</p>
          </div>
          <Link
            href="/api/admin/logout"
            className="btn py-2 px-4 text-xs bg-primaryColor border border-paragraphColor text-paragraphColor hover:border-redColor hover:text-redColor"
          >
            Logout
          </Link>
        </div>

        {/* Feedback toast */}
        {feedback.message && (
          <div
            className={`mb-6 px-4 py-3 rounded text-sm font-medium ${
              feedback.type === "error"
                ? "bg-redColor text-whiteColor"
                : "bg-greenColor text-whiteColor"
            }`}
          >
            {feedback.message}
          </div>
        )}

        {/* Add / Edit Form */}
        <section className="bg-primaryColorLight rounded-2xl p-6 mb-12">
          <h2 className="font-oswald font-bold text-xl uppercase mb-6">
            {editingId ? "Edit Item" : "Add New Item"}
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs text-paragraphColor mb-1 uppercase">
                  Name *
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Chicken Burger"
                  className="w-full bg-primaryColor border border-primaryColorLight rounded px-3 py-2 text-sm text-whiteColor placeholder-paragraphColor focus:outline-none focus:border-secondaryColor"
                />
              </div>

              <div>
                <label className="block text-xs text-paragraphColor mb-1 uppercase">
                  Price *
                </label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={form.price}
                  onChange={handleChange}
                  required
                  placeholder="e.g. 12.99"
                  className="w-full bg-primaryColor border border-primaryColorLight rounded px-3 py-2 text-sm text-whiteColor placeholder-paragraphColor focus:outline-none focus:border-secondaryColor"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-paragraphColor mb-1 uppercase">
                Category *
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full bg-primaryColor border border-primaryColorLight rounded px-3 py-2 text-sm text-whiteColor focus:outline-none focus:border-secondaryColor"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-paragraphColor mb-1 uppercase">
                Description
              </label>
              <input
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Short description"
                className="w-full bg-primaryColor border border-primaryColorLight rounded px-3 py-2 text-sm text-whiteColor placeholder-paragraphColor focus:outline-none focus:border-secondaryColor"
              />
            </div>

            <div>
              <label className="block text-xs text-paragraphColor mb-1 uppercase">
                Image
              </label>
              <div className="flex flex-col gap-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    setImageFile(file);
                    setImagePreview(URL.createObjectURL(file));
                  }}
                  className="w-full text-sm text-paragraphColor file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:bg-secondaryColor file:text-blackColor hover:file:opacity-80 cursor-pointer"
                />
                {imagePreview && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="h-24 w-24 object-cover rounded border border-primaryColorLight"
                  />
                )}
                {!imagePreview && form.imageKey && (
                  <p className="text-xs text-paragraphColor">Current key: {form.imageKey}</p>
                )}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="btn bg-secondaryColor text-blackColor hover:opacity-80 disabled:opacity-50"
              >
                {loading ? "Saving…" : editingId ? "Update Item" : "Add Item"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="btn bg-primaryColor border border-paragraphColor text-paragraphColor hover:border-whiteColor hover:text-whiteColor"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Items List */}
        <section>
          <h2 className="font-oswald font-bold text-xl uppercase mb-6">
            Current Menu Items ({items.length})
          </h2>

          {items.length === 0 ? (
            <p className="text-paragraphColor text-sm">No items found.</p>
          ) : (
            <ul className="grid gap-4">
              {items.map((item) => (
                <li
                  key={item.id || item.name}
                  className="bg-primaryColorLight rounded-xl px-5 py-4 flex items-center justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-oswald font-bold text-lg uppercase truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-paragraphColor mt-0.5 capitalize">
                      {item.category} &mdash;{" "}
                      <span className="text-secondaryColor">${item.price}</span>
                    </p>
                    {item.description && (
                      <p className="text-xs text-paragraphColor mt-1 truncate">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => handleEdit(item)}
                      className="btn py-2 px-4 text-xs bg-primaryColor border border-secondaryColor text-secondaryColor hover:bg-secondaryColor hover:text-blackColor"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="btn py-2 px-4 text-xs bg-primaryColor border border-redColor text-redColor hover:bg-redColor hover:text-whiteColor"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
