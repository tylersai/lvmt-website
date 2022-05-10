import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStaffTypeListAction } from "redux/action/staffTypeAction";

export const ConfigDataServiceComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getStaffTypeListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};
