import test, { expect } from "@playwright/test";

test("Input should have an empty value if state is not persisted", async ({ page }) => {
  await page.goto("/");

  const input = page.getByLabel("First Name");
  await input.fill("John");
  await expect(input).toHaveValue("John");
  await page.reload();
  await expect(input).toHaveValue("");
});

test("Input should have a persisted value after reload", async ({ page }) => {
  await page.goto("/");

  const input = page.getByLabel("First Name");
  await input.fill("John");
  await expect(input).toHaveValue("John");
  await page.getByRole("button", { name: "Save Input" }).click();

  await page.reload();
  await expect(input).toHaveValue("John");
});

test("Check the value of the local storage", async ({ page }) => {
  await page.goto("/");

  const input = page.getByLabel("First Name");
  await input.fill("John");
  await page.getByRole("button", { name: "Save Input" }).click();

  const storage = await page.context().storageState();
  console.log(storage.cookies);
  console.log(storage.origins[0].localStorage);
});
