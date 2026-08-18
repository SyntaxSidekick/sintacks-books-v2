import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CSSProperties } from "react";
import {
  Alert,
  Badge,
  Button,
  Card,
  ChartContainer,
  Dialog,
  Progress,
  SearchField,
  Tabs,
  TextField,
} from "@sintacks/design-system";
import styles from "./VisualAudit.stories.module.css";

function MiniChart() {
  return (
    <svg
      className={styles.chart}
      role="img"
      aria-label="Visual audit chart tokens"
      viewBox="0 0 420 140"
    >
      <path
        d="M24 110 C80 88 102 98 146 64 S230 72 270 40 342 52 398 24"
        fill="none"
        stroke="var(--chart-1)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="34" y="52" width="28" height="62" rx="7" fill="var(--chart-2)" />
      <rect x="78" y="34" width="28" height="80" rx="7" fill="var(--chart-4)" />
      <rect x="122" y="72" width="28" height="42" rx="7" fill="var(--chart-6)" />
    </svg>
  );
}

function VisualAudit() {
  const swatches = [
    ["Canvas", "var(--background-canvas)"],
    ["Base surface", "var(--surface-primary)"],
    ["Sunken", "var(--surface-sunken)"],
    ["Raised", "var(--surface-raised)"],
    ["Sapphire", "var(--chart-1)"],
    ["Indigo", "var(--chart-2)"],
    ["Violet", "var(--chart-3)"],
    ["Amber", "var(--chart-5)"],
  ];

  return (
    <div className={styles.audit}>
      <Card>
        <div className={styles.display}>Premium reporting surfaces</div>
        <p>
          Typography, depth, controls, feedback, and visualization tokens in one review surface.
        </p>
      </Card>
      <div className={styles.swatches}>
        {swatches.map(([label, color]) => (
          <span
            className={styles.swatch}
            key={label}
            style={{ "--swatch": color } as CSSProperties}
          >
            {label}
          </span>
        ))}
      </div>
      <div className={styles.grid}>
        <Card>
          <div className={styles.row}>
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Badge variant="success">Paid</Badge>
          </div>
        </Card>
        <Card>
          <TextField id="audit-client" label="Client" placeholder="Apex Co." />
          <SearchField id="audit-search" label="Search" placeholder="Projects, invoices, clients" />
        </Card>
        <Card>
          <Alert title="Payment captured" variant="success">
            Receipt and reconciliation are ready.
          </Alert>
          <Progress value={68} label="Budget used" />
        </Card>
      </div>
      <Tabs
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: (
              <ChartContainer title="Revenue Trend" summary="Native SVG using chart tokens">
                <MiniChart />
              </ChartContainer>
            ),
          },
          {
            id: "dialog",
            label: "Dialog",
            content: (
              <Dialog open title="Confirm invoice">
                Dialog surface, backdrop, focus, and elevation styling.
              </Dialog>
            ),
          },
        ]}
      />
    </div>
  );
}

const meta = { title: "Foundations/Visual Audit", component: VisualAudit } satisfies Meta<
  typeof VisualAudit
>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
