import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CSSProperties } from "react";
import { CalendarDays, FileText, Plus, TrendingUp } from "lucide-react";
import { Badge, Button, Card, ChartContainer, Icon, PageHeader } from "@sintacks/design-system";
import styles from "./Dashboard.stories.module.css";

function Sparkline({ color = "var(--chart-1)" }: { color?: string | undefined }) {
  return (
    <svg className={styles.sparkline} role="img" aria-label="Metric trend" viewBox="0 0 280 70">
      <path
        d="M4 52 C34 38 40 48 61 34 S98 44 121 28 158 34 177 22 213 32 232 18 258 30 276 20"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </svg>
  );
}

function CashFlowChart() {
  return (
    <svg
      className={styles.chart}
      role="img"
      aria-label="Cash flow increasing across May"
      viewBox="0 0 720 280"
    >
      <defs>
        <linearGradient id="cashFlowFill" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="var(--chart-1)" stopOpacity="0.28" />
          <stop offset="1" stopColor="var(--chart-3)" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      {[60, 110, 160, 210].map((y) => (
        <line key={y} x1="32" x2="700" y1={y} y2={y} stroke="var(--chart-grid)" />
      ))}
      <path
        d="M34 214 C92 184 120 198 168 158 S248 164 298 132 382 126 430 96 504 122 558 80 626 78 696 42 L696 236 L34 236 Z"
        fill="url(#cashFlowFill)"
      />
      <path
        d="M34 214 C92 184 120 198 168 158 S248 164 298 132 382 126 430 96 504 122 558 80 626 78 696 42"
        fill="none"
        stroke="var(--chart-1)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M34 226 C94 206 128 214 176 188 S244 196 300 164 378 174 430 142 510 156 558 126 626 134 696 96"
        fill="none"
        stroke="var(--chart-2)"
        strokeDasharray="8 8"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <circle cx="558" cy="80" r="5" fill="var(--chart-1)" />
      <foreignObject x="470" y="34" width="150" height="72">
        <div className={styles.period}>May 26: $118K</div>
      </foreignObject>
    </svg>
  );
}

function DonutChart() {
  return (
    <svg role="img" aria-label="Client revenue distribution" viewBox="0 0 180 180">
      <circle
        cx="90"
        cy="90"
        r="58"
        fill="none"
        stroke="var(--chart-1)"
        strokeWidth="26"
        strokeDasharray="108 260"
        transform="rotate(-90 90 90)"
      />
      <circle
        cx="90"
        cy="90"
        r="58"
        fill="none"
        stroke="var(--chart-2)"
        strokeWidth="26"
        strokeDasharray="78 260"
        strokeDashoffset="-112"
        transform="rotate(-90 90 90)"
      />
      <circle
        cx="90"
        cy="90"
        r="58"
        fill="none"
        stroke="var(--chart-4)"
        strokeWidth="26"
        strokeDasharray="64 260"
        strokeDashoffset="-194"
        transform="rotate(-90 90 90)"
      />
      <circle
        cx="90"
        cy="90"
        r="58"
        fill="none"
        stroke="var(--chart-5)"
        strokeWidth="26"
        strokeDasharray="48 260"
        strokeDashoffset="-262"
        transform="rotate(-90 90 90)"
      />
      <text
        x="90"
        y="86"
        textAnchor="middle"
        fill="var(--text-primary)"
        fontSize="18"
        fontWeight="700"
      >
        $128K
      </text>
      <text x="90" y="108" textAnchor="middle" fill="var(--text-secondary)" fontSize="12">
        Revenue
      </text>
    </svg>
  );
}

function BusinessOverview() {
  const bars = [
    ["Brand Identity", "$18,750", "82%"],
    ["Website Redesign", "$14,230", "64%"],
    ["Mobile App", "$11,890", "52%"],
    ["Marketing Campaign", "$8,460", "38%"],
  ];

  return (
    <div className={styles.canvas}>
      <div className={styles.dashboard}>
        <div className={styles.toolbar}>
          <PageHeader
            title="Business Overview"
            description="Reporting period: May 1 - May 31, 2025"
          />
          <div className={styles.toolbar}>
            <span className={styles.period}>
              <Icon icon={CalendarDays} size="sm" />
              May 1 - May 31, 2025
            </span>
            <Button iconStart={Plus}>New invoice</Button>
          </div>
        </div>

        <div className={styles.metricGrid}>
          <Card className={`${styles.metric} ${styles.heroMetric}`}>
            <span className={styles.metricLabel}>Total Revenue</span>
            <strong className={styles.metricValue}>$128,540</strong>
            <span className={styles.metricDelta}>Up 18.6% vs previous period</span>
            <Sparkline color="white" />
          </Card>
          {[
            ["Net Profit", "$42,830", "Up 14.2%", "var(--chart-3)"],
            ["Outstanding", "$36,270", "Attention 8.7%", "var(--chart-5)"],
            ["Active Projects", "18", "22 tasks due", "var(--chart-1)"],
          ].map(([label, value, delta, color]) => (
            <Card className={styles.metric} key={label}>
              <span className={styles.metricLabel}>{label}</span>
              <strong className={styles.metricValue}>{value}</strong>
              <span className={styles.muted}>{delta}</span>
              <Sparkline color={color} />
            </Card>
          ))}
        </div>

        <div className={styles.contentGrid}>
          <ChartContainer title="Cash Flow" summary="This period compared with previous period">
            <CashFlowChart />
          </ChartContainer>
          <ChartContainer title="Accounts Receivable Aging" summary="Outstanding balance by age">
            <div className={styles.donutWrap}>
              <DonutChart />
              <ul className={styles.legend}>
                {[
                  "0-30 days $14,600",
                  "31-60 days $9,250",
                  "61-90 days $6,480",
                  "91+ days $5,940",
                ].map((item, index) => (
                  <li className={styles.legendItem} key={item}>
                    <span
                      className={styles.dot}
                      style={{ "--dot-color": `var(--chart-${index + 1})` } as CSSProperties}
                    />
                    <span>{item}</span>
                    <span className={styles.muted}>{[40, 26, 18, 16][index]}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </ChartContainer>
        </div>

        <div className={styles.lowerGrid}>
          <ChartContainer title="Project Profitability" summary="Margin after direct costs">
            <div className={styles.barList}>
              {bars.map(([label, value, width]) => (
                <div className={styles.barRow} key={label}>
                  <span>{label}</span>
                  <span className={styles.barTrack}>
                    <span
                      className={styles.barFill}
                      style={{ "--bar-value": width } as CSSProperties}
                    />
                  </span>
                  <span className={styles.money}>{value}</span>
                </div>
              ))}
            </div>
          </ChartContainer>
          <ChartContainer title="Client Revenue Distribution" summary="Top clients and long tail">
            <div className={styles.donutWrap}>
              <DonutChart />
              <ul className={styles.legend}>
                {["Apex Co.", "Nova Labs", "Pulse Ltd.", "Other"].map((item, index) => (
                  <li className={styles.legendItem} key={item}>
                    <span
                      className={styles.dot}
                      style={{ "--dot-color": `var(--chart-${index + 1})` } as CSSProperties}
                    />
                    <span>{item}</span>
                    <span className={styles.money}>{[28, 21, 17, 34][index]}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </ChartContainer>
          <Card>
            <ul className={styles.list}>
              {["Website Redesign - Nova", "Mobile App - Pulse", "Brand Identity - Apex"].map(
                (item, index) => (
                  <li className={styles.milestone} key={item}>
                    <Icon icon={TrendingUp} size="sm" />
                    <span>
                      {item}
                      <br />
                      <span className={styles.muted}>Due in {[2, 7, 15][index]} days</span>
                    </span>
                    <Badge variant={index === 0 ? "brand" : "info"} size="small">
                      On track
                    </Badge>
                  </li>
                ),
              )}
              {[
                "INV-2025-042 Apex Co. $8,750",
                "INV-2025-041 Nova Labs $6,480",
                "INV-2025-040 Pulse Ltd. $11,890",
              ].map((item, index) => (
                <li className={styles.invoice} key={item}>
                  <Icon icon={FileText} size="sm" />
                  <span>{item}</span>
                  <Badge variant={index === 2 ? "warning" : "success"} size="small">
                    {index === 2 ? "Overdue" : "Paid"}
                  </Badge>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

const meta = {
  title: "Patterns/Dashboard/Business Overview",
  component: BusinessOverview,
} satisfies Meta<typeof BusinessOverview>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
