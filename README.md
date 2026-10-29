# cyotec-dark-mode

A small Firefox extension that cycles the current page through four display states:

- `0`: disabled
- `1`: `brightness(75%)`
- `2`: `brightness(50%)`
- `3`: `invert(90%) hue-rotate(180deg)`

The selected state is stored as an integer in the page's `localStorage` under
`cyotec-dark-mode`, so each site origin remembers its own setting. The filter
is applied to `document.documentElement.style.filter` as soon as the document
starts loading.

Click the toolbar button or use `Alt+Shift+D` to cycle through the states.
