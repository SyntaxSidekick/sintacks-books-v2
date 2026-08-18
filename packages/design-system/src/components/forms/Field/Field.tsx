import type { ReactNode } from "react";
import styles from "./Field.module.css";

export interface FieldProps {
  id: string;
  label: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  children: ReactNode;
}

export const fieldDescriptionId = (id: string) => `${id}-description`;
export const fieldErrorId = (id: string) => `${id}-error`;

export function Field({ id, label, description, error, children }: FieldProps) {
  return (
    <div className={styles.root}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      {children}
      {description ? (
        <p className={styles.description} id={fieldDescriptionId(id)}>
          {description}
        </p>
      ) : null}
      {error ? (
        <p className={styles.error} id={fieldErrorId(id)}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
