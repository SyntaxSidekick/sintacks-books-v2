import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import styles from "./Button.module.css";
import type { ButtonProps } from "./Button.types.js";
import { classNames } from "../../../utilities/classNames.js";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "medium",
    loading = false,
    loadingLabel,
    iconStart: IconStart,
    iconEnd: IconEnd,
    fullWidth = false,
    disabled,
    children,
    className,
    type = "button",
    ...props
  },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      type={type}
      className={classNames(styles.root, className)}
      data-variant={variant}
      data-size={size}
      data-full-width={fullWidth || undefined}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
    >
      {loading ? (
        <Loader2 className={styles.spinner} aria-hidden="true" />
      ) : IconStart ? (
        <IconStart className={styles.icon} aria-hidden="true" />
      ) : null}
      {loading && loadingLabel ? loadingLabel : children}
      {!loading && IconEnd ? <IconEnd className={styles.icon} aria-hidden="true" /> : null}
    </button>
  );
});
