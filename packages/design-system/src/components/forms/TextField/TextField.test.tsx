import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TextField } from "./TextField.js";

describe("TextField", () => {
  it("associates label, description, and validation", () => {
    render(<TextField id="client" label="Client" description="Legal name" error="Required" />);
    expect(screen.getByLabelText("Client")).toHaveAccessibleDescription("Legal name Required");
    expect(screen.getByLabelText("Client")).toHaveAttribute("aria-invalid", "true");
  });
});
