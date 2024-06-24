import test, { expect } from "@playwright/test";

test("Get cookies", async ({ page }) => {
  await page.goto("/");

  console.log(await page.context().cookies());
});

test("Set and clear cookies", async ({ page }) => {
  await page.goto("/");

  await page.context().addCookies([
    {
      name: "name",
      value: "John",
      url: "http://localhost",
    },
  ]);

  console.log(await page.context().cookies());
  expect((await page.context().cookies()).length).toBe(1);

  await page.context().clearCookies();
  console.log(await page.context().cookies());
  expect((await page.context().cookies()).length).toBe(0);
});
