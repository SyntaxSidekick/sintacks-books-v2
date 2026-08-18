import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "@sintacks/design-system";
import { applicationConfig } from "../../../app/config/application.js";
import { OrganizationContext } from "./OrganizationContext.js";
import { SidebarNavigation } from "./SidebarNavigation.js";
import { UserContext } from "./UserContext.js";
import styles from "../../../styles/layouts/app-shell/components/AppSidebar.module.css";

export function AppSidebar({
  collapsed,
  onCollapsedChange,
}: {
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
}) {
  return (
    <aside className={styles.root} data-collapsed={collapsed} aria-label="Application sidebar">
      <div className={styles.brand}>
        <span className={styles.mark} aria-hidden="true">
          S
        </span>
        {!collapsed ? <strong>{applicationConfig.name}</strong> : null}
      </div>
      <OrganizationContext collapsed={collapsed} />
      <SidebarNavigation collapsed={collapsed} />
      <div className={styles.footer}>
        <Button
          type="button"
          variant="ghost"
          iconStart={collapsed ? ChevronsRight : ChevronsLeft}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => onCollapsedChange(!collapsed)}
        >
          {!collapsed ? "Collapse" : ""}
        </Button>
        <UserContext collapsed={collapsed} />
      </div>
    </aside>
  );
}
