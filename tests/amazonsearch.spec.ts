import { test, expect } from '@playwright/test';

test('Search shoes in flipkart', async ({ page }) => {

  
  await page.goto('https://www.flipkart.com/');

  
  await page.locator("//input[@type='text'][@class='xkp9Hl ZvCKfk']").fill("1234567890");
  await page.locator("//button[@class='WHahJn UejJtu sz5klr']").click();
  
  
  await page.waitForTimeout(5000);

});

/*

test('verify page title', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');
  page.setDefaultTimeout(3000);
  await page.locator("//input[@id='name']").fill("Test");

});
*/