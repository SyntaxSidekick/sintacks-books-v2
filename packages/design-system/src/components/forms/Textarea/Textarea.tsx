import { forwardRef, type TextareaHTMLAttributes } from "react";
import controlStyles from "../controls.module.css";
import { Field, fieldDescriptionId, fieldErrorId } from "../Field/index.js";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  description?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { id, label, description, error, ...props },
  ref,
) {
  const describedBy =
    [description ? fieldDescriptionId(id) : undefined, error ? fieldErrorId(id) : undefined]
      .filter(Boolean)
      .join(" ") || undefined;
  return (
    <Field id={id} label={label} description={description} error={error}>
      <textarea
        {...props}
        ref={ref}
        id={id}
        className={`${controlStyles.control} ${controlStyles.textarea}`}
        aria-describedby={describedBy}
        aria-invalid={error ? "true" : undefined}
      />
    </Field>
  );
});
