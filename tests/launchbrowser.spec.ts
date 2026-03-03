import { test, expect } from '@playwright/test';

/*test('Open Google', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});

test('Open Bing', async ({ page }) => {
  await page.goto('https://www.bing.com');
  await expect(page).toHaveTitle(/Bing/);
});

test('Open youtube', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await expect(page).toHaveTitle(/YouTube/);
});
*/

test("verify page title",async({page}) => {
    page.setDefaultNavigationTimeout(60000);
    await page.goto("https://www.myntra.com");

    let title:string=await page.title();
    console.log("title:",title);
    await expect(page).toHaveTitle("Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra")
    })


 