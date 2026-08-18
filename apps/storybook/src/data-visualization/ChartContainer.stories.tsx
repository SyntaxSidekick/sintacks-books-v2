import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChartContainer } from "@sintacks/design-system";
import styles from "./ChartContainer.stories.module.css";

function RevenueTrend() {
  return (
    <svg
      className={styles.chart}
      role="img"
      aria-label="Revenue trend rising through the month"
      viewBox="0 0 640 220"
    >
      <defs>
        <linearGradient id="revenueArea" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="var(--chart-1)" stopOpacity="0.25" />
          <stop offset="1" stopColor="var(--chart-4)" stopOpacity="0.03" />
        </linearGradient>
      </defs>
      {[42, 86, 130, 174].map((y) => (
        <line key={y} x1="34" x2="616" y1={y} y2={y} stroke="var(--chart-grid)" />
      ))}
      <path
        d="M36 174 C86 154 112 160 152 126 S222 142 268 104 346 104 394 78 472 98 520 56 578 62 614 38 L614 196 L36 196 Z"
        fill="url(#revenueArea)"
      />
      <path
        d="M36 174 C86 154 112 160 152 126 S222 142 268 104 346 104 394 78 472 98 520 56 578 62 614 38"
        fill="none"
        stroke="var(--chart-1)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </svg>
  );
}

function AgingBars() {
  const bars = [92, 58, 38, 32];
  return (
    <svg
      className={styles.chart}
      role="img"
      aria-label="Accounts receivable aging bars"
      viewBox="0 0 520 220"
    >
      {bars.map((width, index) => (
        <g key={width} transform={`translate(28 ${32 + index * 44})`}>
          <text y="16" fill="var(--text-secondary)" fontSize="13">
            {["0-30 days", "31-60 days", "61-90 days", "91+ days"][index]}
          </text>
          <rect x="120" y="2" width="350" height="18" rx="9" fill="var(--surface-sunken)" />
          <rect
            x="120"
            y="2"
            width={width * 3.5}
            height="18"
            rx="9"
            fill={`var(--chart-${index + 1})`}
          />
          <text x="486" y="16" fill="var(--text-primary)" fontSize="13" textAnchor="end">
            {["$14.6K", "$9.2K", "$6.4K", "$5.9K"][index]}
          </text>
        </g>
      ))}
    </svg>
  );
}

function BudgetActual() {
  return (
    <svg
      className={styles.chart}
      role="img"
      aria-label="Budget versus actual grouped bars"
      viewBox="0 0 520 220"
    >
      {["Apex", "Nova", "Pulse", "Volt"].map((label, index) => {
        const x = 56 + index * 112;
        return (
          <g key={label}>
            <rect
              x={x}
              y={58 + index * 7}
              width="28"
              height={130 - index * 10}
              rx="7"
              fill="var(--chart-2)"
            />
            <rect
              x={x + 34}
              y={42 + index * 10}
              width="28"
              height={146 - index * 13}
              rx="7"
              fill="var(--chart-4)"
            />
            <text x={x + 30} y="208" fill="var(--text-secondary)" fontSize="12" textAnchor="middle">
              {label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function ProjectHealthTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Project</th>
          <th>Status</th>
          <th className={styles.number}>Margin</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Brand Identity</td>
          <td>Healthy</td>
          <td className={styles.number}>42%</td>
        </tr>
        <tr>
          <td>Website Redesign</td>
          <td>Watch</td>
          <td className={styles.number}>31%</td>
        </tr>
        <tr>
          <td>Mobile App</td>
          <td>Healthy</td>
          <td className={styles.number}>36%</td>
        </tr>
        <tr>
          <td>Campaign Launch</td>
          <td>At risk</td>
          <td className={styles.number}>18%</td>
        </tr>
      </tbody>
    </table>
  );
}

function DataVizSuite() {
  return (
    <div className={styles.grid}>
      <ChartContainer
        className={styles.wide}
        title="Cash Flow"
        summary="Area chart with prior-period comparison styling"
      >
        <RevenueTrend />
      </ChartContainer>
      <ChartContainer
        title="Accounts Receivable Aging"
        summary="Semantic aging buckets with amber attention states"
      >
        <AgingBars />
      </ChartContainer>
      <ChartContainer
        title="Budget Versus Actual"
        summary="Grouped bars using sapphire, violet, and amber tokens"
      >
        <BudgetActual />
      </ChartContainer>
      <ChartContainer
        title="Project Health"
        summary="Data-table alternative for dense financial scanning"
      >
        <ProjectHealthTable />
      </ChartContainer>
      <ChartContainer title="Outstanding Invoices" summary="$36,270 open balance across 5 clients">
        <RevenueTrend />
      </ChartContainer>
    </div>
  );
}

const meta = { title: "Data Visualization/ChartContainer", component: DataVizSuite } satisfies Meta<
  typeof DataVizSuite
>;
export default meta;
export const FinancialReporting: StoryObj<typeof meta> = {};
