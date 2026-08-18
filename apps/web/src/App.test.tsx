import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App.js";

describe("diagnostic app", () => {
  it("renders infrastructure diagnostics", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /development diagnostics/i })).toBeInTheDocument();
  });
});
