import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "@sintacks/design-system";

const meta = { title: "Navigation/Tabs", component: Tabs } satisfies Meta<typeof Tabs>;
export default meta;
export const Default: StoryObj<typeof meta> = {
  args: {
    tabs: [
      { id: "overview", label: "Overview", content: "Summary content" },
      { id: "activity", label: "Activity", content: "Recent activity" },
    ],
  },
};
