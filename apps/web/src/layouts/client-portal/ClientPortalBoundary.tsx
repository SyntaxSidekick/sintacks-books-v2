import { Card, EmptyState, PageHeader } from "@sintacks/design-system";
import styles from "../../styles/layouts/client-portal/ClientPortalBoundary.module.css";

export function ClientPortalBoundary() {
  return (
    <main className={styles.root} id="main-content" tabIndex={-1}>
      <section className={styles.content} aria-labelledby="page-title">
        <PageHeader
          title="Client portal"
          description="This route boundary is intentionally separate from the internal application shell."
        />
        <Card>
          <EmptyState title="Client portal implementation has not started">
            The portal shell and client-facing features are deferred to a later stage.
          </EmptyState>
        </Card>
      </section>
    </main>
  );
}
