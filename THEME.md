# Theme rules: "Cell Block"

A dark, warm, vintage look: brick-dark backgrounds, aged brass and gold trim, big chunky serif titles. All styling lives in `src/app/(frontend)/theme.css`, which loads after `devfolio.css` and re-skins it. Follow these rules for every new section or component.

## Colours

Use the `--jh-*` tokens only. Don't put raw hex values in components or new CSS.

| Token | Value | Use |
| --- | --- | --- |
| `--jh-bg` | `#0e0c0a` | Page background |
| `--jh-surface` / `--jh-surface-2` | `#1a1612` / `#231d17` | Cards and panels (gradient from 2 down to 1) |
| `--jh-gold` | `#d4a24c` | Accents, links, labels, dividers |
| `--jh-gold-bright` | `#f2c66d` | Hover state, top of the button gradient |
| `--jh-gold-deep` | `#8f6424` | Bottom of gradients, parchment borders |
| `--jh-border` / `--jh-border-soft` | gold at 45% / 18% | Frame line / inner hairline |
| `--jh-cream` | `#f3e6c9` | Headings, titles |
| `--jh-text` | `#d2c4a8` | Body text |
| `--jh-muted` | `#9a8a70` | Secondary text, captions |
| `--jh-ember` | `#e8902e` | Glow tint only |
| `--jh-parchment` / `--jh-ink` | `#c8a674` / `#2b1f14` | Parchment band and dark text on gold |

Gold is for emphasis. Use it on one primary button per view, on prices and percentages, on the active nav link and on dividers. Don't use it on large fills.

## Type

| Variable | Font | Use |
| --- | --- | --- |
| `--font-display` | Playfair Display (700) | Hero and section titles, always uppercase |
| `--font-label` | Cinzel | Eyebrows, nav, buttons, card titles, labels; letter-spaced |
| `--font-body` | Lora | Paragraphs |

## Shapes and surfaces

- Every card is a riveted metal plate (`.jh-card`). The frame is the SVG `public/frames/plate.svg`, laid over the card as a 9-slice `border-image`:
  - an outer bronze molding line and an inner line, with a dark channel between them
  - the inner line curves around a round boss in each corner, and a pewter rivet sits in each boss
  - the card body is grainy black
  - change the frame's look by editing the SVG; change its size with `--jh-frame`
- A card with an image puts it flush at the top in `.jh-card__media` > `.jh-card__img`. A half-round tab with a rivet sticks in from each side at the seam (`public/frames/seam-*.svg`).
- Tags are dark pills with a gold rim (`.jh-badge`). Small controls use 4px corners.
- Depth comes from deep black shadows and the soft amber glow (`--jh-glow`). Don't use light or grey shadows.
- Photos get a slight warm treatment (`sepia(0.15)`) and a brass border.

## Section pattern

Every section follows this order:

1. Eyebrow: `<span class="jh-eyebrow">Behind the bars</span>`
2. Title: `<h2 class="jh-display">Our Story</h2>` (or `.title-a`)
3. Divider: `<div class="jh-divider"><span></span></div>` (or `.line-mf`)
4. Content in `.jh-card` or `.box-shadow-full`

## Building blocks

| Class | Use |
| --- | --- |
| `.jh-eyebrow` | Small-caps line above a title, with gold rules on both sides |
| `.jh-display` | Big chunky serif title |
| `.jh-divider` | Gold rule with a diamond in the middle |
| `.jh-card` | Riveted metal plate card, lifts on hover |
| `.jh-card__media` / `.jh-card__img` | Flush top image with seam rivets |
| `.jh-medallion` | Round icon badge |
| `.jh-feature` | Rounded box: medallion plus two-line label |
| `.jh-checklist` | List with gold checks |
| `.jh-footnote` | Italic closing line, under a `.jh-divider` |
| `.jh-cta-row` | Gold button flanked by long rules |
| `.jh-badge` | Dark pill tag in a card corner |
| `.jh-stat` | Icon tile (icon plus a two-line caption) |
| `.jh-btn` | Primary gold glowing pill button |
| `.jh-btn-ghost` | Secondary dark outlined pill button |
| `.jh-price` | Gold figure (a price, %, or year) |
| `.jh-parchment` | Light aged-paper band, such as a newsletter or call to action |

Icons come from Bootstrap Icons in gold (`--jh-gold`).
