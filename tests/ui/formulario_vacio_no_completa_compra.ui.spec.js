import { test, expect } from '@playwright/test';

test('Formulario vacío no completa compra', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');

  // 1. Ir al carrito (el boton Place Order esta aca, NO en la home)
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.waitForURL('**/cart.html');

  // 2. Abrir el modal de compra
  await page.getByRole('button', { name: 'Place Order' }).click();

  // 3. Verificar que el modal se muestra
  const modal = page.locator('#orderModal');
  await expect(modal).toBeVisible();

  // 4. Preparar un handler para aceptar el alert automáticamente
  let dialogMessage = '';
  page.once('dialog', (dialog) => {
    dialogMessage = dialog.message();
    dialog.accept();
  });

  // Intentar comprar SIN llenar el formulario
  await page.getByRole('button', { name: 'Purchase' }).click();

  // 5. Verificar el mensaje del alert
  expect(dialogMessage).toContain('Please fill out Name and Creditcard');
});
