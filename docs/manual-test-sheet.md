# Manual test sheet

This sheet records checks that need a person, browser, assistive technology or physical device not exercised in the local review. Leave a row **Pending** until it is actually performed; do not copy an expected result into the actual-result field.

## Record for each run

- Tester / initials:
- Date and local time:
- Device, OS and browser/version:
- Browser viewport (CSS px), zoom, orientation and text-size settings:
- Site build / local commit:
- Actual results and affected route(s):
- Defects, evidence link and retest result:

Use **Pass**, **Fail**, **Blocked** or **Pending**. Ask permission before recording a visitor or capturing identifiable information.

## Checks

| Check | Procedure and expected result | Classification against supplied brief | Status / actual result |
| --- | --- | --- | --- |
| Real browser zoom at 200% | In a browser, set page zoom to 200% (not a root-font simulation). Visit all eight routes. Text and controls remain readable and usable; no content or navigation is clipped, and no unnecessary horizontal scrolling is needed. Record browser, OS, route and any exception. | **Supplied brief QA protocol** (§12): supports explicit criteria 1.4, 2.6 and 5.1. It is a specified test, not a separately numbered assessment criterion. | **Pass** — Microsoft Edge 155.0.4283.62 on Windows 11 Pro 10.0.26200; actual browser zoom indicator showed 200%, with a 764 CSS-pixel viewport. Visited `index.html`, `features.html`, `how-it-works.html`, `compatibility.html`, `security.html`, `use-cases.html`, `faq.html` and `about.html`. Each had `scrollWidth - clientWidth = 0`; the first viewport on each was visually reviewed with no observed clipping or overlap, and headings/navigation remained readable. The user then scrolled through all eight pages and reported no defects. At this zoom, Tab focused the skip link visibly and Enter moved to `#main-content`; one FAQ disclosure collapsed and reopened through Windows UI Automation (not keyboard). |
| 400% zoom / reflow | Start at a 1280 CSS-pixel-wide viewport if available; set browser zoom to 400% so the layout viewport is about 320 CSS px. Check all eight pages and key navigation/FAQ interactions. Content reflows without two-dimensional scrolling for ordinary text, overlap, clipped controls or lost information. Record the effective CSS viewport. | **Additional stress test** requested for this review. The supplied brief specifies 200% zoom/reflow, not this 400% protocol. Results can support explicit criteria 2.6 and 5.1. | **Pending** — actual result: |
| Second browser | Choose a browser other than the VS Code integrated Chromium browser; record its exact version and OS. Open all eight routes at narrow and desktop widths. Check navigation, current-page state, internal links, one skip-link path and opening/closing FAQ disclosures. | **Supplied brief QA protocol** (§12): test available browsers and record versions. Supports explicit criteria 2.6 and 5.1; not a separate numbered criterion. | **Pending** — actual result: |
| Physical mobile device | Open the local site on a phone on the same network, or use an approved local preview. Check portrait and landscape, all eight routes, navigation wrapping, text, diagram, footer and touch activation of links/disclosures. Record device, OS, browser and viewport/orientation. | **Supplied brief QA protocol** (§12): check available devices; if unavailable, leave pending. Supports explicit criteria 2.6 and 5.1; not a separate numbered criterion. | **Pending** — actual result: |
| Screen-reader navigation | With an available screen reader and browser, record both versions. On all eight routes navigate by landmarks and headings; check the main navigation label/current page, skip link, diagram caption, link purpose and page order. On FAQ, find a summary, hear its expanded/collapsed state, and toggle it. No repeated, missing or misleading names; content order matches visual reading order. | **Conditional supplied brief QA protocol** (§12): perform a spot check if available; otherwise leave pending and keep this procedure. Supports explicit criteria 2.7 and 5.1; not a separate numbered criterion. | **Pending** — actual result: |
| Independent visitor tasks (six stories) | Recruit a first-time visitor who has not read the README. Do not explain the answers or coach. Ask them to: **1)** explain what UAR is and whether this site runs it; **2)** find and describe the proposed workflow; **3)** explain Pass/Warning/Blocker and whether these guarantee safety; **4)** find what security/compatibility the site actually assesses; **5)** find a hypothetical scenario and a relevant FAQ answer; **6)** use the navigation on a narrow viewport or keyboard and reach the requested page. Record the exact prompt, route/action, whether completed unaided, misunderstanding/dead end, and neutral participant feedback. | **Explicit supplied merit/testing evidence:** M(ii) asks for a concrete first-time comprehension task when a real tester is available; M(iii) requires mapped user stories and verified journeys; 5.1 requires manual usability testing. | **Pending** — tester/task results: |

## After testing

If a check fails, note the symptom, route, viewport and reproduction steps in [testing.md](../testing.md). Plan any UI change in [design-decisions.md](design-decisions.md) before implementation, then rerun the affected checks, validators and screenshot evidence. The 24 SVG wireframes remain retrospective records and must not be relabelled as original planning.
