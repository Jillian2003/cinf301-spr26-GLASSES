# Glasses & Style — First Page + Shop

A two-page static site: a landing page and a Shop catalog (built div-only) sharing the same fonts, theme, and styling.

## Project Structure

```
css/
  style.css
fonts/
html/
  index.html
images/
javascript/
  script.js
second-page/
  css/
    second-page.css
  html/
    index.html
  images/
  js/
    script.js
```

## Pages
- Landing: [html/index.html](html/index.html)
  - Header with brand icons, tagline, and search form.
  - Slideshow, info cards, and a specs table.
- Shop (div-only): [second-page/html/index.html](second-page/html/index.html)
  - Catalog grid of product cards (image, title, short description, price).
  - “Add to Cart” buttons update a simple cart count.
  - Navigation includes Home, Shop, About, Specs, Contact. About/Specs/Contact link back to the landing page sections.

## Styling & Assets
- Shared theme and fonts come from [css/style.css](css/style.css).
- Shop-specific layout lives in [second-page/css/second-page.css](second-page/css/second-page.css).
- Minimal cart JS is in [second-page/js/script.js](second-page/js/script.js).
- Images used on Shop are in [second-page/images](second-page/images).

## Run Locally (Windows PowerShell)
From the `firstpage` folder:

```powershell
cd "c:\Users\jilli\OneDrive\Stetson University\Spring 2026\Web Application\firstpage"
python -m http.server 5500
```

- Landing: http://localhost:5500/html/index.html
- Shop: http://localhost:5500/second-page/html/index.html

Stop the server with `Ctrl+C`.

## Alternative: VS Code Live Server
- Install “Live Server” in VS Code.
- Open [html/index.html](html/index.html) and click “Go Live”.
- If needed, navigate to the pages directly: `/html/index.html` and `/second-page/html/index.html`.

## Troubleshooting
- If assets don’t load, make sure you open the page via `/html/index.html` or `/second-page/html/index.html`, not the folder root.
- If port `5500` is busy, change it (e.g., `8000`) and update the URL.
- Hard refresh (`Ctrl+F5`) to bypass cache.
- Font Awesome is loaded via CDN; if an icon is missing, it may be Pro-only. Replace with a Free icon from the same library.
