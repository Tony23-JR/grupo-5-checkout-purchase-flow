# Playwright Bootcamp - Proyecto Final

Suite de pruebas automatizadas sobre DemoBlaze utilizando Playwright para validar el flujo de compra (Checkout / Purchase Flow).

> QA Automation Bootcamp - Rolling Code School - Tucumán

---

## Integrantes

* Antonio Rotger
* Ariana Martinez
* Germán Azcurra Roda
* Rocío Arreguez

**Grupo 5 - Sección asignada:** Purchase Flow (Checkout)

---

## Descripción del Proyecto

Este proyecto tiene como objetivo automatizar los casos de prueba correspondientes al flujo de compra de DemoBlaze, validando que un usuario pueda completar exitosamente una compra desde el carrito de compras.

Los escenarios automatizados cubren:

* Apertura del modal "Place Order"
* Completar formulario de compra con datos válidos
* Finalización exitosa de la compra
* Visualización del mensaje de confirmación
* Validación de comportamiento con formulario vacío

---

## Casos de Prueba Automatizados

| ID   | Descripción                                  |
| ---- | -------------------------------------------- |
| TC01 | Abrir modal Place Order                      |
| TC02 | Completar formulario con datos válidos       |
| TC03 | Purchase exitosa con mensaje de confirmación |
| TC04 | Validar mensaje de éxito visible             |
| TC05 | Formulario vacío no completa la compra       |

---

## Tecnologías

* Playwright - Framework de automatización
* Node.js - Runtime de JavaScript
* JavaScript - Lenguaje de programación
* Git & GitHub - Control de versiones

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Tony23-JR/grupo-5-checkout-purchase-flow.git
cd grupo-5-purchase-flow
```

2. Instalar dependencias:

```bash
npm install
```

3. Instalar navegadores de Playwright:

```bash
npx playwright install
```

---

## Ejecución de Tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests API
npm run test:api

# Ejecutar tests UI
npm run test:ui

# Ejecutar tests E2E
npm run test:e2e

# Ejecutar en modo headed
npm run test:headed

# Visualizar reporte HTML
npm run report
```

---

## Estructura del Proyecto

```text
tests/
├── api/
├── ui/
├── e2e/
└── helpers.js
```

---

## Alcance del Proyecto

La automatización se enfoca en el módulo Checkout / Purchase de DemoBlaze, validando tanto el comportamiento esperado del formulario de compra como la correcta confirmación de una orden generada por el usuario.

---

## Convenciones de Commits

```bash
git commit -m "TC01: implement open place order modal"
git commit -m "TC02: implement purchase form validation"
git commit -m "TC03: implement successful purchase flow"
git commit -m "TC04: validate confirmation message"
git commit -m "TC05: validate empty purchase form"
```
