# firefox-dark-mode

A small Firefox extension that cycles the current page through three display states:

- `0`: disabled
- `1`: `brightness(50%)`
- `2`: `invert(90%) hue-rotate(180deg)`

The selected state is stored as an integer in the page's `localStorage` under
`firefox-dark-mode`, so each site origin remembers its own setting. The filter
is applied to `document.documentElement.style.filter` as soon as the document
starts loading.

Click the toolbar button or use `Ctrl+Alt+D` (`Command+Alt+D` on macOS) to cycle
through the states.

## Install temporarily

1. Open `about:debugging` in Firefox.
2. Select **This Firefox**, then **Load Temporary Add-on**.
3. Choose this repository's `manifest.json` file.
