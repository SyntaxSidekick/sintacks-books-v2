import { expect, test } from "@playwright/test";

test("application shell loads", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /application shell/i })).toBeVisible();
  await expect(page.getByRole("complementary", { name: /application sidebar/i })).toBeVisible();
  await expect(page.getByRole("navigation", { name: /primary navigation/i })).toBeVisible();
});
