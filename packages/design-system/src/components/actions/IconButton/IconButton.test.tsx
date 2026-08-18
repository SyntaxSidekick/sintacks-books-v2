import { render, screen } from "@testing-library/react";
import { Search } from "lucide-react";
import { describe, expect, it } from "vitest";
import { IconButton } from "./IconButton.js";

describe("IconButton", () => {
  it("requires and exposes an accessible name", () => {
    render(<IconButton icon={Search} label="Search clients" />);
    expect(screen.getByRole("button", { name: "Search clients" })).toBeInTheDocument();
  });
});
