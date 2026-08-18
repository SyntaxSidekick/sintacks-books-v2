import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./Button.js";

describe("Button", () => {
  it("renders an accessible button and disables while loading", () => {
    render(
      <Button loading loadingLabel="Saving">
        Save
      </Button>,
    );
    expect(screen.getByRole("button", { name: "Saving" })).toBeDisabled();
    expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "true");
  });
});
