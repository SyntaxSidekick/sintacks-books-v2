import { Loader2 } from "lucide-react";
import styles from "../feedback.module.css";

export interface SpinnerProps {
  label?: string;
}

export function Spinner({ label = "Loading" }: SpinnerProps) {
  return <Loader2 className={styles.spinner} role="status" aria-label={label} />;
}
