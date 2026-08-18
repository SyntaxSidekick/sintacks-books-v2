import { useQuery } from "@tanstack/react-query";
import { getHealth, getReadiness } from "../api/client.js";
import { env } from "../env.js";

export function Diagnostics() {
  const health = useQuery({ queryKey: ["health"], queryFn: getHealth, retry: false });
  const readiness = useQuery({ queryKey: ["readiness"], queryFn: getReadiness, retry: false });

  return (
    <main className="diagnostics">
      <h1>Development diagnostics</h1>
      <dl aria-label="Infrastructure status">
        <div>
          <dt>Application</dt>
          <dd>{env.APP_NAME}</dd>
        </div>
        <div>
          <dt>Environment</dt>
          <dd>{env.APP_ENV}</dd>
        </div>
        <div>
          <dt>Frontend</dt>
          <dd>ok</dd>
        </div>
        <div>
          <dt>API health</dt>
          <dd>{health.isLoading ? "checking" : (health.data?.status ?? "unavailable")}</dd>
        </div>
        <div>
          <dt>API readiness</dt>
          <dd>{readiness.isLoading ? "checking" : (readiness.data?.status ?? "unavailable")}</dd>
        </div>
      </dl>
    </main>
  );
}
