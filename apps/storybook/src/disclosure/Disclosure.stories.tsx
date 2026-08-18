import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "@sintacks/design-system";

const meta = { title: "Disclosure/Accordion", component: Accordion } satisfies Meta<
  typeof Accordion
>;
export default meta;
export const Default: StoryObj<typeof meta> = {
  args: {
    items: [
      {
        title: "Keyboard behavior",
        content: "Native details/summary disclosure supports keyboard activation.",
      },
    ],
  },
};
