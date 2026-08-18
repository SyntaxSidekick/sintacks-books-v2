import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "../Button/index.js";
import styles from "./IconButton.module.css";
import type { IconButtonProps } from "./IconButton.types.js";
import { classNames } from "../../../utilities/classNames.js";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { icon: IconComponent, label, loading = false, selected = false, className, ...props },
  ref,
) {
  const RenderedIcon = loading ? Loader2 : IconComponent;
  return (
    <Button
      {...props}
      ref={ref}
      className={classNames(styles.root, className)}
      aria-label={label}
      aria-busy={loading || undefined}
      aria-pressed={selected || undefined}
      loading={false}
    >
      <RenderedIcon aria-hidden="true" />
    </Button>
  );
});
