import{test,expect } from '@playwright/test'
 test('click' , async ({page}) =>{
    await page.goto('https://www.geeksforgeeks.org/');
    await page.locator("//button[text()='Sign In']").click();
    await page.locator("//input[@placeholder='Username or Email']").fill('admin');
    await page.locator("//input[contains(@type,'password')]").fill('password');
    await page.locator("//span[contains(@class,'notSocialLoginBtnText')]").click();
    var data = await page.locator("//div[contains(text(),'Incorrect login credentials')]").innerText();
    console.log(data);
    await page.waitForTimeout(3000);
 })