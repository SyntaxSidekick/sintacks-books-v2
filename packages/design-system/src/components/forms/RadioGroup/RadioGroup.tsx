import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "../controls.module.css";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, ...props },
  ref,
) {
  return (
    <label className={styles.radioRow}>
      <input {...props} ref={ref} type="radio" />
      {label}
    </label>
  );
});

export interface RadioGroupProps {
  legend: string;
  children: ReactNode;
}

export function RadioGroup({ legend, children }: RadioGroupProps) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}
