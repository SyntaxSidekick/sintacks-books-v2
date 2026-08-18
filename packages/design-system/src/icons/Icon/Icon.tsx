import styles from "./Icon.module.css";
import type { IconProps } from "../icon.types.js";
import { classNames } from "../../utilities/classNames.js";

export function Icon({
  icon: IconComponent,
  size = "md",
  label,
  decorative = false,
  className,
}: IconProps) {
  const isDecorative = decorative || !label;

  return (
    <span
      className={classNames(styles.root, className)}
      data-size={size}
      aria-hidden={isDecorative ? "true" : undefined}
      role={isDecorative ? undefined : "img"}
      aria-label={isDecorative ? undefined : label}
    >
      <IconComponent
        width="100%"
        height="100%"
        strokeWidth={2}
        aria-hidden="true"
        focusable="false"
      />
    </span>
  );
}
