Local browser evidence

These PNGs are full-page captures of the locally served website. They are finished-site screenshots, not wireframes or mockups. The original Features page captures are retained as pre-planner history; the five Features planner captures below show the comparison planner. None is evidence of original design planning.

| Page / user story | 320px | 390px | 768px | 1024px | 1440px |
| --- | --- | --- | --- | --- | --- |
| Home — understand UAR | [PNG](home-320.png) | [PNG](home-390.png) | [PNG](home-768.png) | [PNG](home-1024.png) | [PNG](home-1440.png) |
| Features — understand the review areas and use the planner | [PNG](features-planner-320.png) | [PNG](features-planner-390.png) | [PNG](features-planner-768.png) | [PNG](features-planner-1024.png) | [PNG](features-planner-1440.png) |
| How It Works — follow the concept | [PNG](workflow-320.png) | [PNG](workflow-390.png) | [PNG](workflow-768.png) | [PNG](workflow-1024.png) | [PNG](workflow-1440.png) |
| Compatibility — interpret the labels | [PNG](compatibility-320.png) | [PNG](compatibility-390.png) | [PNG](compatibility-768.png) | [PNG](compatibility-1024.png) | [PNG](compatibility-1440.png) |
| Security — check the boundaries | [PNG](security-320.png) | [PNG](security-390.png) | [PNG](security-768.png) | [PNG](security-1024.png) | [PNG](security-1440.png) |
| Use Cases — find examples | [PNG](use-cases-320.png) | [PNG](use-cases-390.png) | [PNG](use-cases-768.png) | [PNG](use-cases-1024.png) | [PNG](use-cases-1440.png) |
| About — review project scope | [PNG](about-320.png) | [PNG](about-390.png) | [PNG](about-768.png) | [PNG](about-1024.png) | [PNG](about-1440.png) |
| FAQ — find answers and terms | [PNG](faq-320.png) | [PNG](faq-390.png) | [PNG](faq-768.png) | [PNG](faq-1024.png) | [PNG](faq-1440.png) |

Capture conditions

- Captured from the local preview at `http://localhost:8000/`.
- Original 40-capture batch: VS Code integrated browser; user agent reported VS Code 1.143.1, Chromium 150.0.7871.250, Electron 43.7.7; device pixel ratio reported as 2.5.
- Each width is the CSS viewport width set in the browser. The new Features-page batch was captured separately through the shared VS Code browser page. PNG pixel dimensions reflect capture scaling and are not the CSS viewport measurements.
- Full-page PNGs were saved after visiting each route. No public site or external asset was used.
- The five Features planner captures were saved on 27 October 2026 after the comparison planner was implemented; their requested CSS viewport widths are 320, 390, 768, 1024 and 1440 pixels. The files are full-page browser captures, not simulated mockups.
- [The planner's example Pass result](features-planner-bundle-pass.png) was captured from the rebuilt local release bundle at a requested 1440px CSS viewport. It demonstrates only an illustrative result from entered values, not verified compatibility.

See [testing.md](../../testing.md) for the measured layout checks, interaction tests, validation, and limitations. The SVGs in [wireframes](../wireframes/README.md) are separate, retrospective layout reconstructions.

Actual 400% browser-zoom evidence

The following are first-viewport screenshots captured in Microsoft Edge at actual 400% browser zoom. They are viewport captures, not full-page images; complete route measurements, browser/OS versions and keyboard results are recorded in [zoom400-results.txt](zoom400-results.txt).

| Route | Screenshot |
| --- | --- |
| Home | [PNG](zoom400-home.png) |
| Features | [PNG](zoom400-features.png) |
| Features planner controls | [PNG](zoom400-features-planner.png) |
| How It Works | [PNG](zoom400-workflow.png) |
| Compatibility | [PNG](zoom400-compatibility.png) |
| Security | [PNG](zoom400-security.png) |
| Use Cases | [PNG](zoom400-use-cases.png) |
| About | [PNG](zoom400-about.png) |
| FAQ | [PNG](zoom400-faq.png) |

Not-found page check

`404.html` is a static custom error document. Its latest root-relative version returned zero messages from Nu; see [404-w3c-validation.txt](404-w3c-validation.txt). Local link results and the limitation of the Python preview server are in [404-test.txt](404-test.txt). The live Netlify site returned the branded page with HTTP 404 for a nested unknown path; the stylesheet and root-level links worked. The page offers a Home link rather than redirecting automatically. See [netlify-live-review.txt](netlify-live-review.txt).

Published Netlify screenshots

These are real browser captures of the live deployment, not local mockups. The detailed route, content, asset and interaction checks are in [netlify-live-review.txt](netlify-live-review.txt).

| Published page | Capture |
| --- | --- |
| Features planner with an illustrative Pass result | [Live screenshot](netlify-live-features-pass.png) |
| Branded error page at a nested unknown route | [Live screenshot](netlify-live-404.png) |
