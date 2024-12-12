import { useState } from "react";

const Menu = () => {
  const [isAllActive, setIsAllActive] = useState(true);
  const [isFoodActive, setIsFoodActive] = useState(false);
  const [isSnackActive, setIsSnackActive] = useState(false);
  const [isBeverageActive, setIsBeverageActive] = useState(false);

  const buttons = [
    { label: 'All', value: 'all', isActive: isAllActive, setIsActive: setIsAllActive },
    { label: 'Food', value: 'food', isActive: isFoodActive, setIsActive: setIsFoodActive },
    { label: 'Snack', value: 'snack', isActive: isSnackActive, setIsActive: setIsSnackActive },
    { label: 'Beverage', value: 'beverage', isActive: isBeverageActive, setIsActive: setIsBeverageActive },
  ];

  return (
    <section>
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <h2 className="section__title">OUR BEST MENU</h2>
          <div className="separator mx-auto"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            hic a natus vitae voluptatem.
          </p>
          <div>
            <ul className="flex flex-wrap justify-center gap-3 py-10">
              {buttons.map((button) => (
                <li
                  key={button.value}
                  className={`btn hover:bg-secondaryColor ${button.isActive ? 'bg-secondaryColor' : 'bg-primaryColorLight'}`}
                  onClick={() => {
                    buttons.forEach((btn) => {
                      if (btn.value === button.value) {
                        btn.setIsActive(true);
                      } else {
                        btn.setIsActive(false);
                      }
                    });
                  }}
                >
                  {button.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;