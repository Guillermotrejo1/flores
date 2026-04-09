const UPSTREAM_MENU_URL = (
  process.env.MENU_API_URL ||
  process.env.NEXT_PUBLIC_MENU_API ||
  "https://zpet76ni78.execute-api.us-east-2.amazonaws.com/prod/menu"
).replace(/\/$/, "");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id, _action, ...rest } = req.body || {};

  // All requests come in as POST from the frontend.
  // _action:"delete" → DELETE /menu/{id}
  // id present        → PUT   /menu  (update existing item)
  // no id             → POST  /menu  (create new item)
  let url;
  let upstreamMethod;

  if (_action === "delete") {
    if (!id) return res.status(400).json({ error: "Missing item id" });
    url = `${UPSTREAM_MENU_URL}/${id}`;
    upstreamMethod = "DELETE";
  } else {
    // POST for both create (no id) and update (id present).
    // Lambda: { id: randomUUID(), ...body } — if body has an id, it wins,
    // so DynamoDB PutCommand overwrites the existing item.
    url = UPSTREAM_MENU_URL;
    upstreamMethod = "POST";
  }

  try {
    console.log(`[admin/items] ${upstreamMethod} → ${url}`, { id, ...rest });
    const response = await fetch(url, {
      method: upstreamMethod,
      headers: { "Content-Type": "application/json" },
      body:
        upstreamMethod === "DELETE"
          ? JSON.stringify({ id })
          : JSON.stringify(id ? { id, ...rest } : rest),
    });

    const text = await response.text();
    let payload;
    try {
      payload = text ? JSON.parse(text) : {};
    } catch {
      payload = { raw: text };
    }

    if (!response.ok) {
      console.log(`[admin/items] Lambda responded ${response.status}:`, payload);
      return res.status(response.status).json({
        error: payload?.error || payload?.message || "Upstream request failed",
        details: payload,
        upstreamUrl: url,
        upstreamStatus: response.status,
      });
    }

    return res.status(200).json(payload);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Request failed";
    return res.status(502).json({ error: message });
  }
}
