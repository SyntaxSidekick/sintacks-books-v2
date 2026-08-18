import { Button, Card, EmptyState } from "@sintacks/design-system";
import { useNavigate } from "react-router";

export function AccessDeniedPage() {
  const navigate = useNavigate();

  return (
    <Card>
      <EmptyState
        title="Access denied"
        action={
          <Button
            type="button"
            onClick={() => {
              void navigate("/overview");
            }}
          >
            Return to overview
          </Button>
        }
      >
        This shell route is reserved for future permission handling.
      </EmptyState>
    </Card>
  );
}
