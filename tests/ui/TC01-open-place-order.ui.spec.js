import { test, expect } from '@playwright/test';
import { addProductToCart } from '../helpers';

test('TC01 - Abrir modal Place Order', async ({ page }) => {
  await addProductToCart(page);

  const placeOrderBtn = page.getByRole('button', {
    name: 'Place Order',
  });

  await expect(placeOrderBtn).toBeVisible();

  await placeOrderBtn.click();

  await expect(page.locator('#orderModal')).toBeVisible();

  await expect(
    page.locator('#orderModal .modal-title'),
  ).toHaveText('Place order');
});