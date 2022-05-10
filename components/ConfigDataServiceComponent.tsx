import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStaffTypeListAction } from "redux/action/staffTypeAction";
import { getRoleTypeListAction } from "redux/action/roleTypeAction";

export const ConfigDataServiceComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getStaffTypeListAction());
    dispatch<any>(getRoleTypeListAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};
