import { forwardRef, type HTMLAttributes } from "react";
import styles from "../display.module.css";
import { classNames } from "../../../utilities/classNames.js";

export type CardProps = HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, ...props },
  ref,
) {
  return <div {...props} ref={ref} className={classNames(styles.card, className)} />;
});
