import { expect, test } from "@playwright/test";

test("diagnostic page loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /development diagnostics/i })).toBeVisible();
  await expect(page.getByText("Frontend")).toBeVisible();
});
