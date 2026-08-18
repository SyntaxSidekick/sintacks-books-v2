import { forwardRef, type DialogHTMLAttributes, type ReactNode } from "react";
import styles from "./Dialog.module.css";

export interface DialogProps extends Omit<DialogHTMLAttributes<HTMLDialogElement>, "title"> {
  title: ReactNode;
  children: ReactNode;
}

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(function Dialog(
  { title, children, ...props },
  ref,
) {
  return (
    <dialog
      {...props}
      ref={ref}
      className={styles.dialog}
      aria-label={typeof title === "string" ? title : undefined}
    >
      <h2>{title}</h2>
      {children}
    </dialog>
  );
});
