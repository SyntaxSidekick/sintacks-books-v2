import { forwardRef, type InputHTMLAttributes } from "react";
import styles from "../controls.module.css";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, ...props },
  ref,
) {
  return (
    <label className={styles.checkRow}>
      <input {...props} ref={ref} type="checkbox" />
      {label}
    </label>
  );
});
