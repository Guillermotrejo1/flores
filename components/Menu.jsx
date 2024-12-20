import { useState } from "react";
import Burgers from "./Burgers";
import Snacks from "./Snacks";
import Beverages from "./Beverages";
import React from "react";

const Menu = () => {
  const [filterCategory, setFilterCategory] = useState("all");
  const [isAllActive, setIsAllActive] = useState(true);
  const [isFoodActive, setIsFoodActive] = useState(false);
  const [isSnackActive, setIsSnackActive] = useState(false);
  const [isBeverageActive, setIsBeverageActive] = useState(false);

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
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {[
              { category: "food", component: <Burgers /> },
              { category: "snack", component: <Snacks /> },
              { category: "beverage", component: <Beverages /> },
            ]
              .filter(
                (item) =>
                  filterCategory === "all" || filterCategory === item.category
              )
              .map((item, index) => (
                <React.Fragment key={index}>{item.component}</React.Fragment>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
