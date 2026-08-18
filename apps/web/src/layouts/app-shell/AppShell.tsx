import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { applicationConfig } from "../../app/config/application.js";
import { getRouteMeta } from "../../app/config/navigation.js";
import { AppHeader } from "./components/AppHeader.js";
import { AppSidebar } from "./components/AppSidebar.js";
import { MobileNavigation } from "./components/MobileNavigation.js";
import { SkipLink } from "./components/SkipLink.js";
import styles from "../../styles/layouts/app-shell/AppShell.module.css";

function readSidebarPreference() {
  try {
    return (
      window.localStorage.getItem(applicationConfig.shellStorageKeys.sidebarCollapsed) === "true"
    );
  } catch {
    return false;
  }
}

export function AppShell() {
  const [collapsed, setCollapsed] = useState(readSidebarPreference);
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    try {
      window.localStorage.setItem(
        applicationConfig.shellStorageKeys.sidebarCollapsed,
        String(collapsed),
      );
    } catch {
      // The shell still works when storage is blocked.
    }
  }, [collapsed]);

  useEffect(() => {
    const routeMeta = getRouteMeta(location.pathname);
    document.title = routeMeta
      ? `${routeMeta.label} | ${applicationConfig.name}`
      : applicationConfig.name;
    document.getElementById("main-content")?.focus();
  }, [location.pathname]);

  return (
    <div className={styles.root} data-sidebar-collapsed={collapsed}>
      <SkipLink />
      <AppSidebar collapsed={collapsed} onCollapsedChange={setCollapsed} />
      <div className={styles.frame}>
        <AppHeader
          mobileMenuButtonRef={mobileMenuButtonRef}
          onMobileMenuOpen={() => setMobileNavigationOpen(true)}
        />
        <main className={styles.main} id="main-content" tabIndex={-1}>
          <Outlet />
        </main>
      </div>
      <MobileNavigation
        open={mobileNavigationOpen}
        returnFocusRef={mobileMenuButtonRef}
        onOpenChange={setMobileNavigationOpen}
      />
    </div>
  );
}
