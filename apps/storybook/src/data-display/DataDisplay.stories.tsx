import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Card, DescriptionList, Grid, KeyValue, Stack } from "@sintacks/design-system";

function DataDisplay() {
  return (
    <Stack>
      <Grid>
        <Card>
          <KeyValue label="Revenue" value="$24,800" />
        </Card>
        <Card>
          <KeyValue label="Outstanding" value="$6,200" />
        </Card>
      </Grid>
      <Card>
        <Stack>
          <div>
            <Badge variant="success">Paid</Badge> <Badge variant="warning">Pending</Badge>{" "}
            <Badge variant="danger">Overdue</Badge> <Badge variant="brand">VIP</Badge>
          </div>
          <DescriptionList
            items={[
              { term: "Client", description: "Northstar Studio" },
              { term: "Owner", description: "Operations" },
            ]}
          />
        </Stack>
      </Card>
    </Stack>
  );
}

const meta = { title: "Data Display/Baseline", component: DataDisplay } satisfies Meta<
  typeof DataDisplay
>;
export default meta;
export const Default: StoryObj<typeof meta> = {};
