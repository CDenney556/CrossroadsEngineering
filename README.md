# Crossroad Engineering: Reducing Off-Peak Delays at Traffic Signals

This is the project site for our EGG 1040 engineering design project at
Red Rocks Community College, Fall 2026. The QR code on our poster points
here: https://cdenney556.github.io/CrossroadsEngineering/

Team: Cameron Denney, Kyle Lindenmeyer, Simon Wright, Isaac Lucero

## What's here

| File | Page |
| --- | --- |
| `index.html` | Home: the problem, the fix, and how it works |
| `design.html` | Each subsystem: puck, puck electronics, power, sensor head, cabinet computer |
| `testing.html` | A write-up of every test we ran, with its figures |
| `gallery.html` | Photo gallery |
| `report.html` | Our full report (`assets/crossroad-engineering-report.pdf`) |
| `sources.html` | Sources [1]-[5], numbered the same as the poster |

I kept it to plain HTML and one stylesheet (`assets/css/style.css`), so
there's no build step. GitHub Pages serves it straight from the main branch.

## Updating it

- **New report:** save the new PDF over `assets/crossroad-engineering-report.pdf`
  and keep the same name, so the links don't break.
- **New photo:** put it in `assets/photos/`, and a smaller copy in
  `assets/photos/thumbs/` for the gallery grid. Then copy one of the `<li>`
  blocks in `gallery.html` and change the file name and caption.
- **Text:** edit the page's HTML directly. The header and footer are repeated
  on every page, so if you change one of those, change it on all six.
