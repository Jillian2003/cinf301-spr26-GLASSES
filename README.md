# cinf301-spr26-GLASSES

# Run Guide

This project is a simple static website. After cloning, you can run it in any of the following ways

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
```

## Clone & Run

Anyone can clone this repo and run locally without extra setup.

### Windows (PowerShell)
```powershell
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
py -m http.server 5500
```
Open: http://localhost:5500/html/index.html

Notes:
- If `py` isn’t available, try:
```powershell
python -m http.server 5500
```
- If the command exits with an error, the port may be busy; change `5500` to another port (e.g., `8000`) and update the URL.

### macOS/Linux (Terminal)
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
python3 -m http.server 5500
```
Open: http://localhost:5500/html/index.html

### Node.js (Cross-platform)
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npx http-server -c-1 -p 5500
```
Open: http://localhost:5500/html/index.html

## 1) Open Directly (quickest)
- Open the workspace in VS Code or File Explorer.
- Open `html/index.html` in your browser.
- Note: if any JavaScript uses `fetch()`/AJAX, browsers may block it under `file://`; use a local server below.

## 2) VS Code Live Server (recommended)
- Install the “Live Server” extension in VS Code (by Ritwick Dey).
- Open `html/index.html`, then right-click → "Open with Live Server".
- If it opens the root, navigate to: `http://127.0.0.1:5500/html/index.html` (port may vary).

## 3) Python HTTP Server
- In PowerShell, from the project root:

```powershell
cd <path-to-your-cloned-folder>
py -m http.server 5500
```

- Open: `http://localhost:5500/html/index.html`
- Stop the server: press `Ctrl+C` in the terminal.
- If `py` isn’t available, try `python -m http.server 5500`.
- If the port is busy, use another port (e.g., `8000`) and update the URL.

