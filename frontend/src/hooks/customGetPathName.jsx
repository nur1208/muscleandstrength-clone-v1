import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPathName } from "../actions/navBlockActions";

export const useGetPathName = (pathname) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPathName(pathname));
  }, [dispatch, pathname]);
};
