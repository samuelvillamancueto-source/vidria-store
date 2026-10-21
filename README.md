# Vidria — Cepillo Glass Hair

Tienda online estática (HTML/CSS/JS puro, sin dependencias) para el lanzamiento del Cepillo Glass Hair Vidria en España.

## Archivos
- `index.html` — landing y página de producto: hero, beneficios, ritual de uso, oferta por packs (1/2/3), garantías, FAQ, CTA final y modal de pago pendiente.
- `styles.css` — toda la maqueta (mobile-first, animaciones suaves al hacer scroll).
- `main.js` — animaciones de aparición + modal "pago en activación" en los botones de compra.
- `aviso-legal.html`, `privacidad.html`, `cookies.html`, `devoluciones.html` — páginas legales (con campos `[Pendiente: …]` por completar con los datos fiscales del titular).
- `` — logo/favicon SVG e imágenes de producto generadas por IA.
- `README.md` — este archivo.

## Precios (copys actuales)
- 1 ud: 14,95 € + 2,95 € envío
- 2 ud (oferta principal): 24,95 € envío gratis · 3 ud: 34,95 € envío gratis
- Breakeven ROAS 1,9 (Doc de métricas); recalcular al confirmar coste de proveedor.
- Coste de producto estimado 0,60-1,50 €/ud (provisional hasta respuesta de proveedor).

## Pendiente para vender de verdad
1. Pasarela de pago (Stripe/Shopify/Redsys): los botones de compra muestran un aviso de "pago en activación".
2. Dominio (propuesta: vidriashop.com) y email hola@vidriashop.com activo.
3. Datos fiscales del titular en `aviso-legal.html` y `privacidad.html`.
4. Confirmar proveedor, coste y plazo real de envío (actualizar `devoluciones.html`).
5. Fotos reales del proveedor cuando lleguen (sustituir los renders IA).

## Publicar
Sitio estático: sirve cualquier hosting. Para GitHub Pages: Settings → Pages → Deploy from branch (main, root). La web queda en `https://<usuario>.github.io/<repo>/`.
