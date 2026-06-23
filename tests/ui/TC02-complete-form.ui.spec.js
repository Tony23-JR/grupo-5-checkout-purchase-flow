import { test, expect } from '@playwright/test';
import {
  addProductToCart,
  completePurchaseForm,
} from '../helpers';

test('TC02 - Completar formulario con datos válidos', async ({
  page,
}) => {
  await addProductToCart(page);

  await page
    .getByRole('button', { name: 'Place Order' })
    .click();

  await completePurchaseForm(page);

  await expect(page.locator('#name')).toHaveValue(
    'Ariana Roda',
  );

  await expect(page.locator('#country')).toHaveValue(
    'Argentina',
  );

  await expect(page.locator('#city')).toHaveValue(
    'Tucuman',
  );

  await expect(page.locator('#card')).toHaveValue(
    '4111111111111119',
  );
});