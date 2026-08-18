import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter, Navigate, Route, Routes } from "react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { AppProviders } from "./app/providers/index.js";
import { getBreadcrumbs } from "./app/router/index.js";
import { AppShell } from "./layouts/app-shell/index.js";
import { AccessDeniedPage } from "./pages/access-denied/index.js";
import { ModulePlaceholder } from "./shared/components/ModulePlaceholder.js";
import { NotFoundPage } from "./pages/not-found/index.js";
import { OverviewPage } from "./pages/overview/index.js";

function renderRoute(initialEntry = "/overview") {
  render(
    <AppProviders>
      <MemoryRouter initialEntries={[initialEntry]}>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<Navigate replace to="/overview" />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route
              path="/projects"
              element={
                <ModulePlaceholder
                  title="Projects"
                  description="Track active publishing and implementation projects."
                />
              }
            />
            <Route
              path="/reports"
              element={
                <ModulePlaceholder
                  title="Reports"
                  description="Review operational reporting and insights."
                />
              }
            />
            <Route path="/access-denied" element={<AccessDeniedPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </AppProviders>,
  );
}

beforeEach(() => {
  window.localStorage.clear();
  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: query.includes("dark"),
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });
});

afterEach(() => {
  cleanup();
});

describe("application shell", () => {
  it("redirects the root route to overview and renders shell landmarks", async () => {
    renderRoute("/");
    await screen.findByRole("heading", { name: /application shell/i });

    expect(screen.getByRole("link", { name: /skip to main content/i })).toHaveAttribute(
      "href",
      "#main-content",
    );
    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
    expect(screen.getByRole("complementary", { name: /application sidebar/i })).toBeInTheDocument();
  });

  it("marks the active sidebar route and renders route-driven breadcrumbs", async () => {
    renderRoute("/projects");

    const navigation = screen.getByRole("navigation", { name: /primary navigation/i });
    await within(navigation).findByRole("link", { name: /projects/i });

    expect(within(navigation).getByRole("link", { name: /projects/i })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("navigation", { name: /breadcrumb/i })).toHaveTextContent(
      "OverviewProjects",
    );
    expect(getBreadcrumbs("/projects").map((item) => item.label)).toEqual(["Overview", "Projects"]);
  });

  it("persists collapsed navigation state", async () => {
    renderRoute("/overview");
    const collapse = await screen.findByRole("button", { name: /collapse sidebar/i });

    fireEvent.click(collapse);

    expect(window.localStorage.getItem("sintacks-books:shell:sidebar-collapsed")).toBe("true");
    expect(screen.getByRole("button", { name: /expand sidebar/i })).toBeInTheDocument();
  });

  it("opens and closes mobile navigation with focus restoration", async () => {
    renderRoute("/overview");
    const trigger = await screen.findByRole("button", { name: /open navigation/i });
    trigger.focus();

    fireEvent.click(trigger);
    expect(screen.getByRole("dialog", { name: /navigation/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /close navigation/i }));
    expect(trigger).toHaveFocus();
  });

  it("persists explicit theme selection", async () => {
    renderRoute("/overview");

    fireEvent.click(await screen.findByRole("button", { name: /^dark$/i }));

    expect(window.localStorage.getItem("sintacks-books:theme-mode")).toBe("dark");
    await waitFor(() => expect(document.documentElement.dataset.theme).toBe("dark"));
  });

  it("supports route search and keyboard shortcut navigation", async () => {
    renderRoute("/overview");

    fireEvent.keyDown(window, { key: "k", ctrlKey: true });
    fireEvent.change(await screen.findByLabelText(/search shell destinations/i), {
      target: { value: "reports" },
    });
    const dialog = screen.getByRole("dialog", { name: /search routes/i });
    fireEvent.click(within(dialog).getByRole("button", { name: /reports reporting route/i }));

    expect(await screen.findByRole("heading", { name: /reports/i })).toBeInTheDocument();
  });

  it("renders access-denied and not-found route states", async () => {
    renderRoute("/access-denied");
    expect(await screen.findByRole("heading", { name: /access denied/i })).toBeInTheDocument();

    renderRoute("/missing-route");
    expect(await screen.findByRole("heading", { name: /page not found/i })).toBeInTheDocument();
  });
});
