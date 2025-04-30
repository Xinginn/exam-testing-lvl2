import { test, expect } from '@playwright/test';

test('has main elements', async ({ page }) => {
  await page.goto('https://rubrr.s3-main.oktopod.app/');

  const heading = page.getByRole('heading', { name: 'Questions pour un CDA' });
  expect(heading).toBeDefined();

  const answerTextBox = page.getByRole('textbox');
  expect(answerTextBox).toBeDefined();

  const submitAnswerButton = page.getByRole('button', { name: 'Répondre' });
  expect(submitAnswerButton).toBeDefined();
});