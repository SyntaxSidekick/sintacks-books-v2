import { Card, EmptyState, PageHeader } from "@sintacks/design-system";
import styles from "../../styles/pages/overview/OverviewPage.module.css";

export function OverviewPage() {
  return (
    <section className={styles.root} aria-labelledby="page-title">
      <PageHeader
        title={<span id="page-title">Application shell</span>}
        description="The internal shell, navigation, route boundaries, and layout foundation are ready for product modules."
      />
      <Card className={styles.checkpoint}>
        <EmptyState title="Shell checkpoint">
          Product dashboards, records, charts, and workflows have not been implemented in this
          stage.
        </EmptyState>
      </Card>
    </section>
  );
}
