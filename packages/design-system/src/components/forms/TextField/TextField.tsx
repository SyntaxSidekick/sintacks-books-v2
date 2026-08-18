import { forwardRef, type InputHTMLAttributes } from "react";
import controlStyles from "../controls.module.css";
import { Field, fieldDescriptionId, fieldErrorId } from "../Field/index.js";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  description?: string;
  error?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { id, label, description, error, ...props },
  ref,
) {
  const describedBy =
    [description ? fieldDescriptionId(id) : undefined, error ? fieldErrorId(id) : undefined]
      .filter(Boolean)
      .join(" ") || undefined;
  return (
    <Field id={id} label={label} description={description} error={error}>
      <input
        {...props}
        ref={ref}
        id={id}
        className={controlStyles.control}
        aria-describedby={describedBy}
        aria-invalid={error ? "true" : undefined}
      />
    </Field>
  );
});
