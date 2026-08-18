import styles from "../../../styles/layouts/app-shell/components/SkipLink.module.css";

export function SkipLink() {
  return (
    <a className={styles.root} href="#main-content">
      Skip to main content
    </a>
  );
}
