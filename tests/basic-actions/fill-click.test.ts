import { expect, test } from "@playwright/test";

test("Fill test", async ({ page }) => {
  await page.goto("");
  await page.getByLabel("First name").fill("John");
  await page.getByLabel("Last name").fill("Doe");

  await page.getByLabel("Date of birth").fill("2023-05-10");
});

test("Check a box, fill in a textarea", async ({ page }) => {
  await page.goto("");

  const checkbox = page.getByRole("checkbox");
  const textarea = page.locator("#textarea");

  await checkbox.check();
  await textarea.fill("Hello, World!");

  await expect(checkbox).toBeChecked();
  await expect(textarea).toHaveValue("Hello, World!");
});

test("Select test", async ({ page }) => {
  await page.goto("/savings.html");

  const deposit = page.getByTestId("deposit");
  const period = page.getByTestId("period");
  const result = page.getByTestId("result");

  await deposit.fill("100");

  await period.selectOption("6 Months");

  await expect(result).toHaveText("After 6 Months you will earn $2.00 on your deposit");

  await period.selectOption({ value: "1 Year" });
  await expect(result).toHaveText("After 1 Year you will earn $5.00 on your deposit");
});
