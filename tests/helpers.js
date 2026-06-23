/**
 * Helpers y constantes compartidas.
 * Importa esto en tus tests para no repetir codigo y usar los mismos valores.
 *
 * Ejemplo de uso:
 *   const { API, generarUsuario } = require('./helpers');
 */

// URLs base
export const API = 'https://api.demoblaze.com';
export const WEB = 'https://www.demoblaze.com';

export function generarUsuario() {
  return {
    username: `alumno_${Date.now()}`,
    password: 'bootcamp123',
  };
}

export async function crearUsuarioPorAPI(request) {
  const usuario = generarUsuario();

  await request.post(`${API}/signup`, {
    data: usuario,
  });

  return usuario;
}

export async function completePurchaseForm(page) {
  await page.fill('#name', 'Ariana Roda');
  await page.fill('#country', 'Argentina');
  await page.fill('#city', 'Tucuman');
  await page.fill('#card', '4111111111111119');
  await page.fill('#month', '06');
  await page.fill('#year', '2026');
}

export async function addProductToCart(page) {
  await page.goto(WEB);

  page.once('dialog', async (dialog) => {
    await dialog.accept();
  });

  await page.locator('.card-title').first().click();

  await page.getByText('Add to cart').click();

  await page.waitForTimeout(2000);

  await page.locator('#cartur').click();
}