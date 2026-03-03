 import { test, expect } from '@playwright/test';

test("verify page title", async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.locator('//input[@name="username"]').fill('Admin');
  await page.locator('//input[@name="password"]').fill('admin123');

  var data = await page.locator("//p[contains(@class,'orangehrm-login-forgot-header')]").innerText();
  console.log(data);
    await page.waitForTimeout(3000);

  await page.locator("//button[@type='submit']").click();
  
  

});
