import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";

const useClickAwayListener = (
  ref: MutableRefObject<HTMLDivElement | null>,
  setOpen: Dispatch<SetStateAction<boolean>>,
  exemptElementId: string | undefined = undefined
) => {
  useEffect(() => {
    const clickAwayHandler = (event: MouseEvent): any => {
      if (
        ref &&
        setOpen &&
        typeof setOpen === "function" &&
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        (!exemptElementId || !document.getElementById(exemptElementId)?.contains(event.target as Node))
      ) {
        setOpen(false);
      }
    };

    document.body.addEventListener("mousedown", clickAwayHandler);
    return () => {
      document.body.removeEventListener("mousedown", clickAwayHandler);
    };
  }, [ref, setOpen, exemptElementId]);
};

export default useClickAwayListener;
