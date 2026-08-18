import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight, Save, Search } from "lucide-react";
import { Button, IconButton, Inline, Stack } from "@sintacks/design-system";

const meta = {
  title: "Actions/Button",
  component: Button,
  args: { children: "Create proposal" },
} satisfies Meta<typeof Button>;
export default meta;
export const Variants: StoryObj<typeof meta> = {
  render: () => (
    <Inline>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="danger">Danger</Button>
    </Inline>
  ),
};
export const Sizes: StoryObj<typeof meta> = {
  render: () => (
    <Inline>
      <Button size="small">Small</Button>
      <Button>Medium</Button>
      <Button size="large">Large</Button>
    </Inline>
  ),
};
export const States: StoryObj<typeof meta> = {
  render: () => (
    <Stack>
      <Inline>
        <Button iconStart={Save}>With icon</Button>
        <Button iconEnd={ArrowRight}>Continue</Button>
        <Button loading loadingLabel="Saving">
          Save
        </Button>
        <Button disabled>Disabled</Button>
      </Inline>
      <Inline>
        <IconButton icon={Search} label="Search" />
        <IconButton icon={Save} label="Save" variant="primary" />
      </Inline>
    </Stack>
  ),
};
