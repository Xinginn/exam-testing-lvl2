import { test, expect } from '@playwright/test';

test('Submit Answer', async ({ page }) => {
  await page.goto('https://rubrr.s3-main.oktopod.app/');

  // fill answer
  const answerTextBox = page.getByRole('textbox');
  answerTextBox.click();
  answerTextBox.fill('Heuuu, je ne sais pas');

  // submit answer
  const submitAnswerButton = page.getByRole('button', { name: 'Répondre' });
  await page.getByRole('button', { name: 'Répondre' }).click();

  const correctionBlock = page.getByText('Réponse corrigée');
  const baseAnswerBlock = page.getByText('Réponse de base du système');
  const newQuestionLink = page.getByRole('link', { name: 'Nouvelle question' });

  expect(correctionBlock).toBeDefined();
  expect(baseAnswerBlock).toBeDefined();
  expect(newQuestionLink).toBeDefined();

});