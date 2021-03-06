import React, { useEffect, useState } from "react";
import { arrowUp } from "../icons";
import { scroll, scrollBtn } from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const elem = document?.querySelector(".navbar-brand") as HTMLElement | null;
    elem?.focus();
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <span className={scroll}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={scrollBtn}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="81.405"
            height="46.539"
            viewBox="0 0 81.405 46.539"
            dangerouslySetInnerHTML={{ __html: arrowUp }}
            aria-hidden
          />
        </button>
      )}
    </span>
  );
}
