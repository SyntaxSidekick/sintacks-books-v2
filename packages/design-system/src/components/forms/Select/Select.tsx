import { forwardRef, type SelectHTMLAttributes } from "react";
import controlStyles from "../controls.module.css";
import { Field } from "../Field/index.js";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: SelectOption[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { id, label, options, ...props },
  ref,
) {
  return (
    <Field id={id} label={label}>
      <select {...props} ref={ref} id={id} className={controlStyles.control}>
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    </Field>
  );
});
