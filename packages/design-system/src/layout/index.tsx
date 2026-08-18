import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import styles from "./layout.module.css";
import { classNames } from "../utilities/classNames.js";

type Space = "1" | "2" | "3" | "4" | "5" | "6" | "8" | "10" | "12";

function gapStyle(name: string, value?: Space): CSSProperties | undefined {
  return value ? { [name]: `var(--space-${value})` } : undefined;
}

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: Space;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  { gap, className, style, ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      className={classNames(styles.stack, className)}
      style={{ ...gapStyle("--stack-gap", gap), ...style }}
    />
  );
});

export interface InlineProps extends HTMLAttributes<HTMLDivElement> {
  gap?: Space;
}

export const Inline = forwardRef<HTMLDivElement, InlineProps>(function Inline(
  { gap, className, style, ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      className={classNames(styles.inline, className)}
      style={{ ...gapStyle("--inline-gap", gap), ...style }}
    />
  );
});

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  gap?: Space;
  min?: string;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(function Grid(
  { gap, min, className, style, ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      className={classNames(styles.grid, className)}
      style={{ ...gapStyle("--grid-gap", gap), "--grid-min": min, ...style } as CSSProperties}
    />
  );
});

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  width?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { width = "lg", className, style, ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      className={classNames(styles.container, className)}
      style={{ "--container-width": `var(--content-width-${width})`, ...style } as CSSProperties}
    />
  );
});

export type SectionProps = HTMLAttributes<HTMLElement>;

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { className, ...props },
  ref,
) {
  return <section {...props} ref={ref} className={classNames(styles.section, className)} />;
});
