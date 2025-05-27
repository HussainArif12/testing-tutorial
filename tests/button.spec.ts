import { test, expect } from "@playwright/test";

test("Clicking on the button increments the count", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("increment").click();
  await expect(page.getByTestId("count-value")).toHaveText("Count: 1");
});
