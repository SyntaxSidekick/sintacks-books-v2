import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card, Stack } from "@sintacks/design-system";

const swatches = [
  "--brand-primary",
  "--brand-accent",
  "--status-success",
  "--status-warning",
  "--status-danger",
  "--chart-1",
  "--chart-2",
  "--chart-3",
];

function Tokens() {
  return (
    <Stack>
      {swatches.map((token) => (
        <Card key={token}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <span
              style={{
                inlineSize: 40,
                blockSize: 40,
                borderRadius: 8,
                background: `var(${token})`,
              }}
            />
            <code>{token}</code>
          </div>
        </Card>
      ))}
    </Stack>
  );
}

const meta = { title: "Foundations/Tokens", component: Tokens } satisfies Meta<typeof Tokens>;
export default meta;
export const Reference: StoryObj<typeof meta> = {};
