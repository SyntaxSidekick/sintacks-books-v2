import { UserCircle } from "lucide-react";
import { Icon } from "@sintacks/design-system";
import { applicationConfig } from "../../../app/config/application.js";
import styles from "../../../styles/layouts/app-shell/components/UserContext.module.css";

export function UserContext({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <section className={styles.root} aria-label="User context">
      <Icon icon={UserCircle} size="md" />
      {!collapsed ? (
        <span>
          <strong>{applicationConfig.userName}</strong>
          <small>{applicationConfig.organizationName}</small>
        </span>
      ) : null}
    </section>
  );
}
