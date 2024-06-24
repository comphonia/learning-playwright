import { expect, test } from "@playwright/test";

const firstName = "John";

test("Default test - Confirm dialog is automatically dismissed", async ({ page }) => {
  await page.goto("/");

  const input = page.getByLabel("First Name");
  await input.fill(firstName);
  await expect(input).toHaveValue(firstName);

  await page.getByRole("button", { name: "Clear" }).click();
  await expect(input).toHaveValue(firstName);
});

test("Confirm dialog to be clicked and name field to be empty", async ({ page }) => {
  page.on("dialog", (dialog) => {
    expect(dialog.type()).toBe("confirm");
    dialog.accept();
  });

  await page.goto("/");

  const input = page.getByLabel("First Name");
  await input.fill(firstName);
  await expect(input).toHaveValue(firstName);

  await page.getByRole("button", { name: "Clear" }).click();
  await expect(input).not.toHaveValue(firstName);
});
