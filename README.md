# D Mohan — independent photography website

Open `index.html` in a browser. The Home, About and Contact pages work directly from this folder; no installation or build step is required.

## Pages

- `index.html` — photographic journal and gallery, with full-image viewing.
- `about.html` — introduction and a photograph from the collection.
- `contact.html` — ways to get in touch using the existing public contact channels.
- `styles.css` — shared responsive layout and visual styling.
- `script.js` — the homepage photograph viewer; Escape closes it. Without JavaScript, photographs open directly.
- `assets/` — four photographs from the original site and the custom D favicon.

All page navigation, images, styles, scripts and the favicon are local. There are no Wix logos, banners, embedded pages, scripts or hosting dependencies. External social links remain intentional.

The Contact page links directly to LinkedIn and YouTube; there is no backend or form that claims to send messages.

## Publishing

The Git repository is rooted in this folder:

- Repository: https://github.com/dmohanofficial07-ship-it/my-web-project
- GitHub Pages address: https://dmohanofficial07-ship-it.github.io/my-web-project/
- Publishing source: the `main` branch, `/ (root)` folder.

The site requires no build step. `.nojekyll` tells GitHub Pages to serve the static files directly. The preview-only `noindex, nofollow` tags have been removed so the published pages can be indexed.

After editing, commit and push from this folder:

```sh
git add index.html about.html contact.html styles.css script.js assets README.md
git commit -m "Update photography website"
git push
```

GitHub Pages republishes changes pushed to `main`. Check the repository's Actions tab for deployment progress. The files can also be served by another static host without changes.

This independent website does not change or publish over the existing Wix site. The parent folder's `.website-share.html` is an archived source capture, is not part of this repository, and should not be included in an upload.

## Content provenance

The four JPGs were downloaded from the original site's media URLs for the earlier homepage concept. The original site was reviewed on 28 September 2026 at https://320506402030.wixstudio.com/mysite. Photograph titles, categories and the personal introduction are proposed editorial copy; they are not verified biographical claims or established project titles.
