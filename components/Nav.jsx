import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="container relative h-14 flex justify-between items-center">
      <div>
        <a href="#" className="text-2xl uppercase font-oswald">
          Bur<span className="text-secondaryColor">ger</span>
        </a>
      </div>
      <div
        className={`absolute top-0 left-0 w-full py-14 bg-primaryColor border-b border-secondaryColor
          md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col text-center gap-5 md:flex-row">
          <li>
            <a
              href="#home"
              className="hover:text-secondaryColor ease-in duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-secondaryColor ease-in duration-200"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="hover:text-secondaryColor ease-in duration-200"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#review"
              className="hover:text-secondaryColor ease-in duration-200"
            >
              Review
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="hover:text-secondaryColor ease-in duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer
        md:hidden">
          <i className="ri-close-line" onClick={() => setIsOpen(false)}></i>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <i className="ri-moon-line cursor-pointer ml-4 text-xl"></i>

        <div className="md:hidden">
          <i
            className="ri-menu-2-line cursor-pointer text-xl"
            onClick={() => toggleMenu()}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
