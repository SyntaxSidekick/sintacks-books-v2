import { Building2 } from "lucide-react";
import { Icon } from "@sintacks/design-system";
import { applicationConfig } from "../../../app/config/application.js";
import styles from "../../../styles/layouts/app-shell/components/OrganizationContext.module.css";

export function OrganizationContext({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <section className={styles.root} aria-label="Organization context">
      <Icon icon={Building2} size="sm" />
      {!collapsed ? (
        <span>
          <strong>{applicationConfig.organizationName}</strong>
          <small>Internal workspace</small>
        </span>
      ) : null}
    </section>
  );
}
