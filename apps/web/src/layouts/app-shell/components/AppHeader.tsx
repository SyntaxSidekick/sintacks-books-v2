import type { RefObject } from "react";
import { Bell, Menu } from "lucide-react";
import { useNavigate } from "react-router";
import { IconButton } from "@sintacks/design-system";
import { applicationConfig } from "../../../app/config/application.js";
import { Breadcrumbs } from "./Breadcrumbs.js";
import { GlobalSearchTrigger } from "./GlobalSearchTrigger.js";
import { ThemeControl } from "./ThemeControl.js";
import styles from "../../../styles/layouts/app-shell/components/AppHeader.module.css";

export function AppHeader({
  mobileMenuButtonRef,
  onMobileMenuOpen,
}: {
  mobileMenuButtonRef: RefObject<HTMLButtonElement | null>;
  onMobileMenuOpen: () => void;
}) {
  const navigate = useNavigate();

  return (
    <header className={styles.root}>
      <div className={styles.left}>
        <IconButton
          ref={mobileMenuButtonRef}
          className={styles.mobileTrigger}
          icon={Menu}
          label="Open navigation"
          type="button"
          onClick={onMobileMenuOpen}
        />
        <Breadcrumbs />
      </div>
      <div className={styles.actions}>
        <GlobalSearchTrigger />
        <ThemeControl />
        <IconButton
          icon={Bell}
          label="Open notifications"
          type="button"
          onClick={() => {
            void navigate("/notifications");
          }}
        />
        <span className={styles.context}>{applicationConfig.organizationName}</span>
      </div>
    </header>
  );
}
