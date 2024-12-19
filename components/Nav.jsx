import { useState, useEffect } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [activeLink, setActiveLink] = useState("home");

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <nav className="container relative h-14 flex justify-between items-center dark:bg-darkColor">
      <div>
        <a href="#" className="text-2xl uppercase font-oswald"> Bur<span className="text-secondaryColor">ger</span> </a>
      </div>
      <div className={`absolute top-0 left-0 w-full py-14 bg-primaryColor border-b border-secondaryColor md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto ${isOpen ? "block" : "hidden"}`} >
        <ul className="flex flex-col text-center gap-5 md:flex-row dark:bg-darkColor">
          {["home", "about", "menu", "review", "contact"].map((link, index) => (
            <li key={index}>
              <a
                href={`#${link}`}
                className={`${activeLink === link ? "text-secondaryColor glow" : ""} hover:text-secondaryColor ease-in duration-200`}
                onClick={() => handleLinkClick(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden">
          <i className="ri-close-line" onClick={() => setIsOpen(false)} ></i>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <i className={`ri-moon-line cursor-pointer ml-4 text-xl ${theme === "dark" ? "ri-sun-line" : ""}`} onClick={toggleTheme} ></i>
        <div className="md:hidden">
          <i className="ri-menu-2-line cursor-pointer text-xl" onClick={() => toggleMenu()} ></i>
        </div>
      </div>
    </nav>
  );
};

export default Nav;