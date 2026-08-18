export const openApiDocument = {
  openapi: "3.1.0",
  info: { title: "Sintacks Books API", version: "0.1.0" },
  paths: {
    "/api/v1/health": {
      get: { summary: "Process liveness", responses: { "200": { description: "Alive" } } },
    },
    "/api/v1/ready": {
      get: {
        summary: "Dependency readiness",
        responses: { "200": { description: "Ready" }, "503": { description: "Not ready" } },
      },
    },
    "/api/v1/version": {
      get: { summary: "Safe version metadata", responses: { "200": { description: "Version" } } },
    },
  },
} as const;
