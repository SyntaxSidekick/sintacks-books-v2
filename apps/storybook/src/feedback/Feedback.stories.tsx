import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, Button, EmptyState, Progress, Spinner, Stack } from "@sintacks/design-system";

function Feedback() {
  return (
    <Stack>
      <Alert title="Ready for review">The proposal has all required sections.</Alert>
      <Alert title="Payment failed" variant="danger">
        Update the payment method before retrying.
      </Alert>
      <Progress label="Upload progress" value={64} />
      <Spinner />
      <EmptyState
        title="No templates yet"
        action={<Button variant="secondary">Create template</Button>}
      >
        Reusable document templates will appear here.
      </EmptyState>
    </Stack>
  );
}

const meta = { title: "Feedback/Baseline", component: Feedback } satisfies Meta<typeof Feedback>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
