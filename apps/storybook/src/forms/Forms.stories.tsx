import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Checkbox,
  Grid,
  Radio,
  RadioGroup,
  SearchField,
  Select,
  Stack,
  Switch,
  Textarea,
  TextField,
} from "@sintacks/design-system";

function Forms() {
  return (
    <Grid min="18rem">
      <TextField id="client-name" label="Client name" description="Use the legal billing name." />
      <SearchField id="search" label="Search" placeholder="Search clients" />
      <Select
        id="status"
        label="Status"
        options={[
          { label: "Draft", value: "draft" },
          { label: "Approved", value: "approved" },
        ]}
      />
      <Textarea id="notes" label="Notes" />
      <Stack>
        <Checkbox label="Send client notification" />
        <Switch label="Recurring billing" />
        <RadioGroup legend="Billing cadence">
          <Radio name="cadence" label="Monthly" />
          <Radio name="cadence" label="Quarterly" />
        </RadioGroup>
      </Stack>
      <TextField id="amount" label="Amount" error="Enter a valid amount." />
    </Grid>
  );
}

const meta = { title: "Forms/Controls", component: Forms } satisfies Meta<typeof Forms>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
