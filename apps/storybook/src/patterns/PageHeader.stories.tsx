import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, PageHeader } from "@sintacks/design-system";

const meta = { title: "Patterns/PageHeader", component: PageHeader } satisfies Meta<
  typeof PageHeader
>;
export default meta;
export const Default: StoryObj<typeof meta> = {
  args: {
    title: "Proposal workspace",
    description: "Static pattern example using production components.",
    actions: <Button>Create proposal</Button>,
  },
};
