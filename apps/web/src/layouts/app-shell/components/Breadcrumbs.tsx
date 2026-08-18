import { Link, useLocation } from "react-router";
import { getBreadcrumbs } from "../../../app/router/routeConfig.js";
import styles from "../../../styles/layouts/app-shell/components/Breadcrumbs.module.css";

export function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location.pathname);

  return (
    <nav className={styles.root} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {breadcrumbs.map((item, index) => {
          const current = index === breadcrumbs.length - 1;
          return (
            <li className={styles.item} key={item.id}>
              {current ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
