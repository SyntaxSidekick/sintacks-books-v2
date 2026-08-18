import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Tabs } from "./Tabs.js";

describe("Tabs", () => {
  it("switches visible panels", () => {
    render(
      <Tabs
        tabs={[
          { id: "one", label: "One", content: "First" },
          { id: "two", label: "Two", content: "Second" },
        ]}
      />,
    );
    fireEvent.click(screen.getByRole("tab", { name: "Two" }));
    expect(screen.getByRole("tabpanel", { name: "Two" })).toHaveTextContent("Second");
  });
});
