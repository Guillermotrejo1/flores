import { useEffect, useState } from "react";

const Menu = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isAllActive, setIsAllActive] = useState(true);
  const [isFoodActive, setIsFoodActive] = useState(false);
  const [isSnackActive, setIsSnackActive] = useState(false);
  const [isBeverageActive, setIsBeverageActive] = useState(false);
  const API = "/api/menu";

  useEffect(() => {
    fetch(API)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch menu items");
        }
        return res.json();
      })
      .then((data) => {
        const normalizedItems = Array.isArray(data) ? data : data.items || [];
        setItems(normalizedItems);
      })
      .catch((err) => setError(err.message || "Failed to fetch menu items"));
  }, [API]);

  const buttons = [
    {
      label: "All",
      value: "all",
      isActive: isAllActive,
      setIsActive: setIsAllActive,
    },
    {
      label: "Food",
      value: "food",
      isActive: isFoodActive,
      setIsActive: setIsFoodActive,
    },
    {
      label: "Snack",
      value: "snack",
      isActive: isSnackActive,
      setIsActive: setIsSnackActive,
    },
    {
      label: "Beverage",
      value: "beverage",
      isActive: isBeverageActive,
      setIsActive: setIsBeverageActive,
    },
  ];

  const normalizeCategory = (value) => {
    const category = String(value || "").toLowerCase();
    if (category.includes("food") || category.includes("burger")) {
      return "food";
    }
    if (category.includes("snack")) {
      return "snack";
    }
    if (category.includes("beverage") || category.includes("drink")) {
      return "beverage";
    }
    return category;
  };

  const filteredItems =
    filterCategory === "all"
      ? items
      : items.filter(
          (item) => normalizeCategory(item.category) === filterCategory,
        );

  return (
    <section id="menu">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="container"
      >
        <div className="max-w-md mx-auto text-center">
          <h2 className="section__title">OUR BEST MENU</h2>
          <div className="separator mx-auto"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic a
            natus vitae voluptatem.
          </p>
          <div>
            <ul className="flex flex-wrap justify-center gap-3 py-10">
              {buttons.map((button) => (
                <li
                  key={button.value}
                  className={`btn hover:bg-secondaryColor dark:bg-darkColorLight dark:hover:bg-secondaryColor  ${
                    button.isActive
                      ? "bg-secondaryColor dark:bg-secondaryColor"
                      : "bg-primaryColorLight"
                  }`}
                  onClick={() => {
                    buttons.forEach((btn) => {
                      if (btn.value === button.value) {
                        btn.setIsActive(true);
                      } else {
                        btn.setIsActive(false);
                      }
                    });
                    setFilterCategory(button.value);
                  }}
                >
                  {button.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          {error ? <p className="paragraph text-red-500 mb-4">{error}</p> : null}
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {filteredItems.map((item) => (
              <li key={item.id || `${item.name}-${item.category}`}>
                <div
                  className="h-56 grid place-items-center bg-primaryColorLight
              rounded-3xl hover:bg-secondaryColor ease-linear duration-200
              lg:h-40 dark:bg-darkColorLight"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl || "/img/burger-1.png"}
                    alt={item.name || "Menu item"}
                    className="hover:scale-110 ease-linear duration-200 w-24 md:w-32 lg:w-24"
                  />
                </div>

                <div className="pt-5">
                  <div className="mb-2">
                    <h4 className="card__title">{item.name}</h4>
                    <p className="paragraph">
                      {item.description || "Freshly prepared and full of flavor."}
                    </p>
                  </div>

                  <p className="text-secondaryColor">${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
