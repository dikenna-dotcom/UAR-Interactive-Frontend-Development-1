# Testing and local review record

## Conditions

- Date: 24 October 2026.
- OS: Windows 11 Pro, version 10.0.26200.
- Local preview: `python -m http.server 8000`, started from the project root; the exact command was used to serve the pages at `http://localhost:8000/`.
- Python: 3.12.10.
- Browser: VS Code integrated browser, user agent `Code/1.143.1 Chrome/150.0.7871.250 Electron/43.7.7`; device pixel ratio reported as 2.5.
- Additional real-browser check: Microsoft Edge 155.0.4283.62, with its displayed browser zoom set to 200% (not simulated through CSS). The effective viewport was 764 CSS pixels. Windows UI Automation inspected the browser's zoom indicator and page focus; Windows keyboard automation sent Tab and Enter to the Edge window.
- Responsive checks used CSS viewport widths of 320, 390, 768, 1024 and 1440 pixels. Full-page captures are indexed in [docs/evidence/README.md](docs/evidence/README.md).
- Validators: W3C Nu HTML Checker (`26.10.18`) and the Jigsaw CSS Validator. The saved responses are [w3c-validation.json](docs/evidence/w3c-validation.json), [jigsaw-validation.json](docs/evidence/jigsaw-validation.json) and [jigsaw-validation.txt](docs/evidence/jigsaw-validation.txt).

## Five UX planes and design rationale

- **Strategy:** the site is for first-time visitors and stakeholders who need a clear, bounded explanation of the UAR concept; the six stories above translate that goal into checks.
- **Scope:** static informational pages are included; runtime execution, device scanning, uploads and real assessments are excluded to avoid implying unsupported functionality.
- **Structure:** eight page roles, contextual next-reading links and grouped FAQ content support distinct visitor questions without repeating the same generic copy.
- **Skeleton:** shared navigation/footer, ordered workflow, semantic disclosure controls and responsive grids provide consistent access and reading order.
- **Surface:** a shared system-font stack, blue accent, restrained panel colors and one CSS-built labelled diagram provide consistent visual hierarchy without external assets.

## User-story acceptance checks

| Story | Acceptance check | Actual local result |
| --- | --- | --- |
| Understand UAR | Home explains the proposed model, states what the static site does not do, and links to the workflow and use cases | Source and local page reviewed; acceptance content is present. No independent comprehension test was run. |
| Follow the concept | The workflow is in a meaningful ordered sequence and separates policy review from compatibility | Five ordered stages are present and rendered. |
| Interpret an outcome | Pass, Warning and Blocker are described as illustrative, not as a safety guarantee | Compatibility content and its links to Security and FAQ were checked. |
| Check trust and boundaries | Security and About do not imply live analysis or certification | Both pages describe the site as informational; no operational runtime claim is made. |
| Find relevant context | Scenarios are marked hypothetical; FAQ has useful categories and terms | Three hypothetical scenarios, four FAQ categories and a glossary of five terms were checked. |
| Use the site on small screens or by keyboard | Navigation remains available, each page has a skip link, and keyboard focus is visible | All five widths rendered; skip-link focus and destination were exercised by keyboard. No screen reader or physical-device test was available. |

These are project-defined acceptance checks, not results from user research. No independent visitor study was performed.

## Test results

| ID | Area and method | Actual result | Status |
| --- | --- | --- | --- |
| R1 | Open and capture each of the eight local routes at each of the five CSS viewport widths; refresh the complete set after the homepage diagram label-wrap fix | 40 full-page browser PNGs were saved in `docs/evidence/`; every page rendered in the integrated browser | Pass in tested browser |
| R2 | Measure `documentElement.scrollWidth` against the viewport; check one `main`, one H1 and six primary links per route at all five widths | 40 route/width combinations; no horizontal overflow or landmark/navigation-count mismatch | Pass in tested browser |
| R3 | Set the root font size to 200% at a 320px viewport on each page; recheck document width | No horizontal overflow on any of the eight pages after the responsive text fix | Pass for this enlarged-text simulation; this is not a real browser-zoom or OS text-size test |
| R4 | Check every local page link and fragment against the served routes and element IDs | 149 internal links checked across eight pages; zero missing targets or fragments and no external website links | Pass locally; hosted-path behavior not tested |
| R5 | Count current-page links and structural landmarks in all pages | Six-link primary navigation; current-page state is correct where a primary destination exists; FAQ and Use Cases use the footer state; one H1 and main per page | Pass by source audit |
| R6 | External website anchors and new-tab behavior | No external website anchors are present in the site pages, so there was no external-link behavior to exercise | Not applicable |
| R7 | At actual 200% browser zoom in Edge, Tab to the skip link, inspect its visible outline, press Enter, and check the fragment and focus destination | The skip link received visible focus; Enter changed the URL to `#main-content` and moved keyboard focus from the hyperlink to the page's focused main-content group. Keyboard events were sent to the real Edge window through Windows keyboard automation. | Pass for this path; not a full keyboard-only traversal |
| R8 | FAQ: inspect each category's initial open count; toggle the first disclosure using Enter twice | Each of four groups had one initially open answer; keyboard interaction closed and reopened the tested answer | Pass for tested native disclosure behavior |
| R14 | Set actual Edge browser zoom to 200%; visit all eight routes; measure document width and review the full pages | Edge 155.0.4283.62 on Windows 11 Pro 10.0.26200 showed 200% zoom and a 764 CSS-pixel viewport. All eight routes had zero measured horizontal overflow. The first viewport of every route was visually reviewed locally; the user then reported scrolling through all eight pages with no defects. | Pass; full-page visual observation is user-reported |
| R9 | Review image alternatives and diagram semantics | No raster images or `<img>` elements occur on site pages. The CSS/HTML home diagram has a labelled figure and caption describing it as illustrative | Reviewed; image-quality criterion is not applicable |
| R10 | Calculate selected authored foreground/background contrast pairs using WCAG relative luminance | All nine listed pairs exceed 4.5:1; calculations and scope limits are in `docs/evidence/contrast-results.txt` | Spot check only; not a complete WCAG audit |
| R11 | Submit all eight final HTML files to the official Nu Checker | Zero errors, warnings or informational messages for all eight pages; version and per-file output are saved in `docs/evidence/w3c-validation.json` | Pass on final files |
| R12 | Submit the current `assets/css/style.css` to the official Jigsaw CSS 3 Validator | HTTP 200; validator response says `validity: true`, 0 errors, 0 warnings. Submitted-file SHA-256: `EFD0F92ADAEA6762BA9460F4959D11BE698FEC1E6D2E9A9787A8C5D134D83DB5`. The exact response and fingerprint are recorded in `docs/evidence/jigsaw-validation.json` and `.txt` | Pass for the recorded file fingerprint |
| R13 | Check for Lighthouse CLI | `lighthouse` was not available in PATH | Not run; no Lighthouse score is claimed |

## Visual review notes

- At 320px, 390px, 768px and 1024px the primary navigation remains available and wraps as needed; the process diagram uses a vertical sequence with downward arrows at 1180px and below. At 1440px it stays horizontal, with adjusted columns so the labels fit.
- The diagram was also checked at 1180px and just above it (1181px), plus 1200px and 1440px. In the horizontal version all four labels occupy one line; the vertical version remains legible at 1180px and below.
- At 768px the shared layouts use the stacked arrangement. At 1024px and 1440px the wider grid layouts return.
- At 1440px the footer has three desktop columns; “More” no longer falls alone onto a second row.
- Text, card spacing, labels and section backgrounds were compared across the full-page captures. The five widths were checked for horizontal page overflow; no global overflow clipping was added.
- At actual Edge browser zoom of 200%, all eight routes had zero measured horizontal overflow. The first viewport of each route was visually inspected locally; the user reported no defects after scrolling through all eight pages.
- There are no raster assets to assess for sharpness or aspect ratio.

The PNGs are browser captures of the local implementation. They do not constitute independent usability feedback or hosted-site evidence.

## Defects found, fixes and retests

| Symptom / impact | Change made | Retest result |
| --- | --- | --- |
| The original eight-item header became crowded on narrow screens | Reduced the primary navigation to the six supplied main destinations; kept Use Cases and FAQ available in contextual links and the footer | Six links remained available and wrapped at all five tested widths |
| On the homepage diagram, equal-width tracks made labels break into narrow fragments at medium and desktop widths | Gave the labelled nodes flexible proportions, reduced their padding slightly and stack the flow below 1180px | Updated captures show the 320px–1024px diagram vertically and the 1440px diagram horizontally without character-by-character wrapping |
| The third footer group wrapped alone beneath a two-column desktop footer | Changed the desktop footer to three columns; it still stacks at the 840px breakpoint | The 1440px computed grid has three columns; 768px remains stacked |
| Enlarged text at 200% caused content to extend beyond the 320px viewport | Added `overflow-wrap: anywhere`, which only breaks a word when needed | All eight pages report no document-width overflow in the same enlarged-text simulation |
| Nu reported an invalid `aria-label` on a generic homepage container | Replaced it with a labelled `figure` and explanatory caption | Final Nu report has zero messages on all pages |
| Nu reported an informational “Section lacks heading” message on five layout-only wrappers | Changed those wrappers to `div`; retained labelled semantic sections for the FAQ groups and actual content sections | Final Nu report has zero messages on all eight pages |
| Earlier Jigsaw runs reported an unrecognised `clip-path` declaration and a custom-property warning | Removed the unsupported declaration; submitted the current stylesheet to the official validator again | Current-file response is valid with zero errors and zero warnings; exact file hash and response are recorded in `docs/evidence/jigsaw-validation.json` |

## Known limitations and unperformed checks

- No screen-reader testing, independent user testing, physical mobile-device testing, second-browser comparison or hosted-site parity test was performed.
- Lighthouse was unavailable and not run.
- At actual 200% browser zoom, all eight routes had zero measured horizontal overflow, and the user reported no defects after scrolling through them. This real-zoom check is separate from the 200% root-font simulation. Still pending: 400% reflow, a second browser, a physical mobile device, screen-reader navigation and independent user tasks. See [manual-test-sheet.md](docs/manual-test-sheet.md).
- Earlier Jigsaw attempts are retained as historical records; the current stylesheet's latest official result is the zero-error, zero-warning response indexed above.
- Keyboard checks covered the skip-link route and one native disclosure interaction; a complete keyboard-only traversal of every page was not recorded.
- Contrast calculations cover selected authored pairs only. No full WCAG audit, automated accessibility score or assistive-technology conformance claim is made.
- No external website links currently occur in the page content. If one is added, the supplied new-tab requirement must be applied and retested.
- The site is local only. Deployment, Git history and hosted-path checks remain incomplete; deployment is pending explicit approval.
- The supplied course brief omits official criterion wording. See [docs/assessment-matrix.md](docs/assessment-matrix.md); no missing criterion text has been invented.
