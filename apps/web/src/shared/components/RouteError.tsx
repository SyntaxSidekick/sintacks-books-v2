import { isRouteErrorResponse, useRouteError } from "react-router";
import { Alert, Button } from "@sintacks/design-system";

export function RouteError() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : "The route could not be rendered.";

  return (
    <Alert title="Something interrupted this page" variant="danger">
      <p>{message}</p>
      <Button type="button" variant="secondary" onClick={() => window.location.assign("/overview")}>
        Return to overview
      </Button>
    </Alert>
  );
}
