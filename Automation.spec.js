import {test, expect} from '@playwright/test';





test('test', async ({ page }) => {
  await page.goto('https://test.nop-station.store/en/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('harry123');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('potter12345');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: 'Search store' }).click();
  await page.getByRole('textbox', { name: 'Search store' }).fill('awesome');
  await page.locator('#ui-id-2').click();
  await page.locator('#add-to-cart-button-63').click();
  await page.waitForTimeout(5000);
  await page.locator('#add-to-cart-button-63').click();
  await page.waitForTimeout(5000);
  await page.locator("//span[@class='cart-label']").click();
  //await page.waitForTimeout(5000);
  await page.locator("//input[@id='termsofservice']").click();
   

  await page.locator("//button[@id='checkout']").click();

  await page.locator("//button[@onclick='Billing.save()']").click();

  await page.locator("//button[@onclick='Shipping.save()']").click();

  await page.locator("//button[@class='button-1 shipping-method-next-step-button']").click();
  await page.locator("button[class='button-1 payment-method-next-step-button']").click();
  //await page.waitForTimeout(2000);
  
//    await page.getByRole('textbox', { name: 'First name:' }).click();
//    await page.getByRole('textbox', { name: 'First name:' }).fill('Harry');
//    await page.getByRole('textbox', { name: 'Last name:' }).click();
//    await page.getByRole('textbox', { name: 'Last name:' }).fill('Potter');
//   
//  
//  

//   await page.getByLabel('State / province:').selectOption('70');
//   await page.getByRole('textbox', { name: 'Address 1:' }).selectOption('70');
//   await page.getByRole('textbox', { name: 'Address 1:' }).fill('Mohakhali');
//   await page.getByRole('button', { name: 'Continue' }).click();
//   await page.getByText('3 Shipping method').click();
//   await page.getByRole('button', { name: 'Continue' }).click();
//   await page.getByRole('link', { name: 'Back' }).click();
//   await page.getByRole('button', { name: 'Continue' }).click();
//   await page.getByRole('button', { name: 'Continue' }).click();
//   await page.getByRole('button', { name: 'Continue' }).click();
//   await page.getByRole('textbox', { name: 'Cardholder name:' }).click();
//   await page.getByRole('textbox', { name: 'Cardholder name:' }).fill('Harry Potter');
//   await page.getByRole('textbox', { name: 'Card number:' }).click();
//   await page.getByRole('textbox', { name: 'Card number:' }).click();
//   await page.getByRole('textbox', { name: 'Card number:' }).fill('4111111111111111');
//   await page.getByLabel('Expiration date:').selectOption('9');


//   await page.getByLabel('Expiration date:').selectOption('9');
//   await page.getByLabel('Expiration date:').selectOption('9');
//   await page.locator('#ExpireYear').selectOption('9');
//   await page.locator('#ExpireYear').selectOption('2030');
//   await page.locator('#ExpireYear').selectOption('2030');










//   await page.locator('#ExpireYear').selectOption('2030');
//   await page.getByRole('textbox', { name: 'Card code:' }).selectOption('2030');
//   await page.getByLabel('Expiration date:').click();
//   await page.getByLabel('Expiration date:').selectOption('12');
//   await page.getByRole('textbox', { name: 'Card code:' }).selectOption('12');
//   await page.getByLabel('Expiration date:').click();
//   await page.getByLabel('Expiration date:').click();
//   await page.getByLabel('Expiration date:').click();
//   await page.getByLabel('Expiration date:').click();
//   await page.getByRole('textbox', { name: 'Card code:' }).click();
//   await page.getByRole('textbox', { name: 'Card code:' }).fill('129');
//   await page.getByRole('button', { name: 'Continue' }).click();
//   await page.getByRole('button', { name: 'Confirm' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Print' }).click();
//   const page1 = await page1Promise;
// adding card info 
// await page.locator("//input[@id='CardholderName']").fill("harry potter");
// await page.locator("//input[@id='CardNumber']").fill("4111111111111111");
// await page.selectOption("//select[@id='ExpireMonth']", { label: '09' });
// await page.locator("//input[@id='CardCode']").fill("129");


});

