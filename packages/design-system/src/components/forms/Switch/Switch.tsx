import { forwardRef, type InputHTMLAttributes } from "react";
import styles from "../controls.module.css";

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { label, ...props },
  ref,
) {
  return (
    <label className={styles.switchRow}>
      <input {...props} ref={ref} className={styles.switch} type="checkbox" role="switch" />
      {label}
    </label>
  );
});
