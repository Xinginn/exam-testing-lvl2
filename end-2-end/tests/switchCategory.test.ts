import { test, expect } from '@playwright/test';

test('switchCategory', async ({ page }) => {
  let categoryLabel;

  await page.goto('https://rubrr.s3-main.oktopod.app/');


  // click on 'Design pattern' category
  const designPatternButton =  page.getByRole('link', { name: 'Design Pattern' })
  expect(designPatternButton).toBeDefined();
  await designPatternButton.click();

  // display selected category
  categoryLabel = page.locator('span').filter({ hasText: 'Design Pattern' });
  expect(categoryLabel).toBeDefined();

  // click on 'POO' category
  const POOButton = page.getByRole('link', { name: 'POO' })
  expect(POOButton).toBeDefined();
  await POOButton.click();

  // display selected category
  categoryLabel = page.locator('span').filter({ hasText: 'POO' });
  expect(categoryLabel).toBeDefined();

  // click on 'React' category
  const reactButton = page.getByRole('link', { name: 'React' })
  expect(reactButton).toBeDefined();
  await reactButton.click();

  // display selected category
  categoryLabel = page.locator('span').filter({ hasText: 'React' });
  expect(categoryLabel).toBeDefined();
});