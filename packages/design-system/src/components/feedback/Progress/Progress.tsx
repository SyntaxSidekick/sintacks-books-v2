import styles from "../feedback.module.css";

export interface ProgressProps {
  value: number;
  max?: number;
  label: string;
}

export function Progress({ value, max = 100, label }: ProgressProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div
      aria-label={label}
      aria-valuemax={max}
      aria-valuemin={0}
      aria-valuenow={value}
      className={styles.progressTrack}
      role="progressbar"
    >
      <div className={styles.progressBar} style={{ inlineSize: `${percent}%` }} />
    </div>
  );
}
