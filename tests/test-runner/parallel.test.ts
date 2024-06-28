import test from "@playwright/test";

// test.describe.configure({ mode: "parallel" }); // This will run all tests in parallel, set at top level

test.describe.parallel("Parallel tests", () => {
  test("Test 1", async () => {
    console.log("Test 1");
  });

  test("Test 2", async () => {
    console.log("Test 2");
  });

  test("Test 3", async () => {
    console.log("Test 3");
  });

  test("Test 4", async () => {
    console.log("Test 4");
  });

  test("Test 5", async () => {
    console.log("Test 5");
  });

  test("Test 6", async () => {
    console.log("Test 6");
  });
});
