import { useEffect, useState } from "react";

const usePageScrollDown = () => {
  const [pageScrollDown, setPageScrollDown] = useState(false)

  // to handle scrollY > 70
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setPageScrollDown(true)
      } else {
        setPageScrollDown(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return pageScrollDown
}

export default usePageScrollDown