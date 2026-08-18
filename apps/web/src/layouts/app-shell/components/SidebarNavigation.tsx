import { NavLink } from "react-router";
import { Icon } from "@sintacks/design-system";
import { navigationItems, primaryNavigationGroups } from "../../../app/config/navigation.js";
import type { AppRouteGroup } from "../../../app/router/route.types.js";
import styles from "../../../styles/layouts/app-shell/components/SidebarNavigation.module.css";

export function SidebarNavigation({
  collapsed = false,
  onNavigate,
}: {
  collapsed?: boolean;
  onNavigate?: () => void;
}) {
  const linkClassName = styles.link ?? "";

  return (
    <nav className={styles.root} aria-label="Primary navigation">
      {primaryNavigationGroups.map((group) => (
        <section className={styles.section} key={group} aria-labelledby={`nav-${group}`}>
          {!collapsed ? (
            <h2 className={styles.heading} id={`nav-${group}`}>
              {group}
            </h2>
          ) : null}
          <ul className={styles.list}>
            {navigationItems
              .filter((item) => item.group === (group as AppRouteGroup))
              .map((item) => (
                <li key={item.id}>
                  <NavLink
                    className={linkClassName}
                    data-collapsed={collapsed}
                    {...(collapsed ? { title: item.label } : {})}
                    to={item.path}
                    onClick={onNavigate}
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={styles.activeMarker}
                          aria-hidden="true"
                          data-active={isActive}
                        />
                        <Icon icon={item.icon} size="sm" />
                        {!collapsed ? (
                          <span>{item.label}</span>
                        ) : (
                          <span className={styles.srOnly}>{item.label}</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </nav>
  );
}
