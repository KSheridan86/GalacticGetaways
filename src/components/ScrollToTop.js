import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
function ScrollToTop({ children }) {
  const location = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    
  }, [location]);

  

  return <>{children}</>;
}
export default ScrollToTop;