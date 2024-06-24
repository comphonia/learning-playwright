import test, { expect } from "@playwright/test";

test("Check for console events", async ({ page }) => {
  page.on("console", (message) => {
    console.log("Message from the page:", message);
    expect.soft(message.type()).not.toEqual("error");
  });

  page.on("pageerror", (error) => {
    console.error("Error from the page:", error.message);
    console.error("Error name:", error.name);
    expect.soft(error.name).not.toEqual("Error");
  });

  page.goto("/");

  await page.getByRole("button", { name: "Register" }).click();
});
