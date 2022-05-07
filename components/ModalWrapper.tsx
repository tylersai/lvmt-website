/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  CSSProperties,
  Dispatch,
  FC,
  MouseEventHandler,
  SetStateAction,
  useCallback,
  useLayoutEffect,
} from "react";
import styles from "@styles/ModalWrapper.module.scss";
import classNames from "classnames";

const sizeColumMap = {
  sm: "col-10 col-sm-8 col-md-6 col-lg-4",
  md: "col-10 col-md-8 col-lg-6",
  lg: "col-10 col-lg-8",
};

interface ModalWrapperProps {
  className?: string;
  style?: CSSProperties;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  background?: "transparent" | "dim";
  size?: "sm" | "md" | "lg";
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalWrapper: FC<ModalWrapperProps> = ({
  children,
  className,
  overlayClassName,
  overlayStyle,
  background = "dim",
  size = "md",
  style,
  open,
  setOpen,
}) => {
  useLayoutEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open]);

  const closeModal = useCallback<MouseEventHandler<HTMLDivElement>>(() => setOpen(false), []);
  const stopClickPropagation = useCallback<MouseEventHandler<HTMLDivElement>>((e) => e.stopPropagation(), []);

  if (!children) {
    return null;
  }

  return (
    <div
      className={classNames(
        styles.ModalOverlay,
        background && styles[background],
        "position-fixed top-0 bottom-0 justify-content-center align-items-center",
        overlayClassName,
        open ? "d-flex" : "d-none"
      )}
      onClick={closeModal}
      style={overlayStyle}
    >
      <div
        className={classNames(styles.ModalWrapper, `bg-white p-3 p-md-4 ${sizeColumMap[size]}`, className)}
        onClick={stopClickPropagation}
        style={style}
      >
        {children}
      </div>
    </div>
  );
};
