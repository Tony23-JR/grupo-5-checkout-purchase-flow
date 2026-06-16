/**
 * Helpers y constantes compartidas.
 * Importa esto en tus tests para no repetir codigo y usar los mismos valores.
 *
 * Ejemplo de uso:
 *   const { API, generarUsuario } = require('./helpers');
 */

// URLs base
const API = 'https://api.demoblaze.com';
const WEB = 'https://www.demoblaze.com';

/**
 * Genera un usuario unico usando la fecha actual.
 * Asi nunca choca con "usuario ya existe".
 */
function generarUsuario() {
  return {
    username: `alumno_${Date.now()}`,
    password: 'bootcamp123',
  };
}

/**
 * Crea un usuario por API. Devuelve las credenciales usadas.
 * Util para el setup de tests E2E.
 */
async function crearUsuarioPorAPI(request) {
  const usuario = generarUsuario();
  await request.post(`${API}/signup`, { data: usuario });
  return usuario;
}

module.exports = {
  API,
  WEB,
  generarUsuario,
  crearUsuarioPorAPI,
  completePurchaseForm,
};

async function completePurchaseForm(page) {
  await page.fill('#name', 'Ariana Roda');
  await page.fill('#country', 'Argentina');
  await page.fill('#city', 'Tucuman');
  await page.fill('#card', '4111111111111119');
  await page.fill('#month', '06');
  await page.fill('#year', '2026');
}
