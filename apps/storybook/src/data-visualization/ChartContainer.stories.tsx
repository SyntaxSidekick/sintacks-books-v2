import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChartContainer } from "@sintacks/design-system";

function DemoChart() {
  return (
    <ChartContainer
      title="Revenue mix"
      summary="Static SVG example; chart library integration is deferred."
    >
      <svg role="img" aria-label="Revenue bars" viewBox="0 0 240 100">
        <rect x="0" y="40" width="50" height="60" fill="var(--chart-1)" />
        <rect x="70" y="20" width="50" height="80" fill="var(--chart-2)" />
        <rect x="140" y="55" width="50" height="45" fill="var(--chart-3)" />
      </svg>
    </ChartContainer>
  );
}

const meta = { title: "Data Visualization/ChartContainer", component: DemoChart } satisfies Meta<
  typeof DemoChart
>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
