import { useEffect } from "react";

export const useAddBodyClass = (className) => {
  useEffect(() => {
    document.body.classList.add(className);
    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);
};
