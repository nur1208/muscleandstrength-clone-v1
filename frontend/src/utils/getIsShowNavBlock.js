import { useLocation } from "react-router-dom";

export const useIsShowNavBlock = () => {
  const location = useLocation();

  return (
    location.pathname !== "/store/search" &&
    location.pathname !== "/store/brand" &&
    location.pathname !== "/store/promos"
  );
};
