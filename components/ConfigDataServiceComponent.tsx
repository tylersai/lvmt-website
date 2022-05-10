import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStaffTypeListAction } from "redux/action/staffTypeAction";
import { getRoleTypeListAction } from "redux/action/roleTypeAction";
import { useSession } from "next-auth/react";

export const ConfigDataServiceComponent = () => {
  const { data, status } = useSession();
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "authenticated" && data.accessToken) {
      dispatch<any>(getStaffTypeListAction(data.accessToken as string));
      dispatch<any>(getRoleTypeListAction(data.accessToken as string));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
  return null;
};
