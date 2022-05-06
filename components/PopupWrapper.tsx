import useClickAwayListener from "@hooks/useClickAwayListener";
import classNames from "classnames";
import { CSSProperties, Dispatch, FC, SetStateAction, useRef } from "react";

interface PopupWrapperProps {
  className?: string;
  style?: CSSProperties;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  exemptElementId?: string;
}

export const PopupWrapper: FC<PopupWrapperProps> = ({ children, className, style, open, setOpen, exemptElementId }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useClickAwayListener(ref, setOpen, exemptElementId);

  if (!open) return null;

  return (
    <div ref={ref} className={classNames("PopupWrapper", className)} style={style}>
      {children}
    </div>
  );
};
