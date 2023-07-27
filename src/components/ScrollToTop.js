import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (event) => {
      const { target } = event;
      if (target.tagName.toLowerCase() === "a" && target.getAttribute("href")?.startsWith("#")) {
        const hash = target.getAttribute("href");
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          // If the element with the specified id exists, prevent default scrolling behavior and update the URL hash.
          event.preventDefault();
          window.location.hash = hash;
        }
      } else {
        // Scroll to the top for other links/routes
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("click", handleScroll);

    return () => {
      window.removeEventListener("click", handleScroll);
    };
  }, [location]);

  return <>{children}</>;
}

export default ScrollToTop;
