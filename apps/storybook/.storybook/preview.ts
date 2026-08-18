import type { Preview } from "@storybook/react-vite";
import "@sintacks/design-system/styles";

const preview: Preview = {
  parameters: {
    layout: "padded",
    backgrounds: { disable: true },
  },
  globalTypes: {
    theme: {
      description: "Design-system theme",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
          { value: "high-contrast", title: "High contrast" },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals["theme"] as string;
      document.documentElement.dataset.theme = theme;
      return Story();
    },
  ],
};

export default preview;
