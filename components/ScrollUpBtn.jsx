import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ScrollUpBtn = () => {
  const [scrollBtn, setScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 250) {
        setScrollBtn(true);
      } else {
        setScrollBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      {scrollBtn && (
        <a
          className="fixed right-4 bottom-4 bg-secondaryColor shadow-sm inline-block px-4 py-2 rounded-full
        text-lg text-blackColor z-50 hover: -translate-y-1 ease-in duration-200"
          href="#"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </a>
      )}
    </>
  );
};

export default ScrollUpBtn;
