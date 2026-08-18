import { Button, Card, EmptyState } from "@sintacks/design-system";
import { useNavigate } from "react-router";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Card>
      <EmptyState
        title="Page not found"
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
        The requested route does not exist in the shell.
      </EmptyState>
    </Card>
  );
}
