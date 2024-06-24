import test, { expect } from "@playwright/test";

test("Set local storage", async ({ page }) => {
  await page.goto("/");

  const input = page.getByLabel("First Name");
  await input.fill("John");
  await expect(input).toHaveValue("John");
  await page.getByRole("button", { name: "Save Input" }).click();

  // check
  const storage = await page.evaluate(() => window.localStorage);
  console.log(storage);

  // clear
  await page.evaluate(() => window.localStorage.clear());
  await page.reload();
  await expect(input).toHaveValue("");

  // set with custom script
  await page.evaluate(setLocalStorage);
  await page.reload();
  await expect(input).toHaveValue("John");
});

function setLocalStorage() {
  localStorage.setItem("firstName", "John");
}
