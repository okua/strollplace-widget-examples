# StrollPlace widget examples

A static educational demonstration of StrollPlace's public place-card widgets,
using Albuquerque, New Mexico and three published neighborhoods: Nob Hill,
Old Town, and Downtown.

Live site: https://okua.github.io/strollplace-widget-examples/

## Included examples

- A moving guide with three live neighborhood cards and fallback place links.
- A six-item checklist saved in the visitor's browser, with a print layout.
- An illustrative property page placement using the compact card.
- An illustrative article footer using a dark city card.
- Copyable embed snippets and links to the public widget builder.
- Links to StrollPlace, StrollPlace HQ, and StrollPlace Pro.

The property layout does not offer a real property. The guide supplies research
prompts, not neighborhood ratings or market estimates. This site adds no
analytics, accounts, API keys, or server-side code. Widgets are served by
https://widgets.strollplace.com and depend on its public availability.

## Run locally

Serve this folder with a static HTTP server, for example:

```sh
python3 -m http.server 43210 --bind 127.0.0.1
```

Then open http://127.0.0.1:43210. No installation or build is required.

`styles.css` is compiled from `styles.scss`. To change styles, use Dart Sass:

```sh
sass --no-source-map --style=expanded styles.scss styles.css
```

## Publish

In repository Settings → Pages, select **Deploy from a branch**, **main**,
and **/(root)**. The `.nojekyll` file disables Jekyll processing.
All local asset paths are relative so the site works under a repository path.

## Widget contract

Use https://dev.strollplace.com to generate an embed for a published city or
neighborhood. Load the public widget script once per page. Place IDs in this
example were verified against public search on November 9, 2026.

This repository contains only standalone example-site source. It does not
include the proprietary StrollPlace application or widget runtime source.
StrollPlace names and services remain the property of their respective owner.
