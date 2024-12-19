import { useEffect, useState } from "react";
import Nav from "../components/Nav.jsx"


const Header = () => {
  const ScrollHeader = () => {
    const [showBorder, setShowBorder] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 50) {
          setShowBorder(true);
        } else {
          setShowBorder(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

    return (
      <header
        className={`bg-primaryColor dark:bg-darkColor fixed top-0 left-0 w-full z-50 ${
          showBorder ? "border-b border-secondaryColor" : ""
        }`}
      >
        <Nav />
      </header>
    );
  };

  return <ScrollHeader />;
};

export default Header;