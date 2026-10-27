Design decisions and review notes

Five UX planes

1. Strategy: The first-time visitor needs to understand what UAR means and whether this site offers a working runtime. The owner goal is to explain the concept without implying that this static project evaluates applications.
2. Scope: The site covers the concept, proposed workflow, compatibility labels, security questions, hypothetical use cases, project boundaries, terminology and a client-side checklist planner. It excludes downloads, uploads, scanning, live verdicts and real compatibility/security decisions.
3. Structure: Six primary destinations lead to the core explanation; Use Cases and FAQ remain available from the home page, contextual links and footer. Every page shares one main landmark and a clear heading hierarchy.
4. Skeleton: Responsive layouts were originally implemented before the SVG wireframes in this project. The 24 current wireframes are post-implementation reconstructions, not evidence of original planning.
5. Surface: A light background, dark body text, blue link/action colour, system fonts and a shared spacing scale support readable technical explanation. The home diagram is built from HTML and CSS; it is marked as illustrative. The Features-page planner follows the same panel and button styles.

Key choices

Add a clearly bounded interactive review planner

New planning dated 27 October 2026, before implementation: the supplied mandatory project requirements require significant JavaScript interaction and user-action responses. Add a client-side planner to the Features page rather than implying the informational site already performs an assessment. A visitor will enter an application name and target environment, optionally list known requirements, and select review topics. JavaScript will validate the required fields and generate a readable checklist/summary from those visitor-provided values. It will not calculate compatibility, inspect a device, contact a service, save or transmit data, or output Pass/Warning/Blocker. The result will state that it is a planning aid, not a UAR assessment or safety verdict. Use labels, fieldsets, native form controls, visible keyboard focus, a polite live result region and text-only DOM insertion. Keep this functionality on the existing Features page to avoid changing the eight-page structure. Test validation, generated content, special-character input, reset behavior and narrow layouts after implementation.

Implementation note: the planner now supports the mandatory custom JavaScript/user-response requirements for one bounded feature; it does not by itself establish that the overall application has all “significant interactive functionality” expected by the qualification. The user must confirm the assessed project's required feature scope with the course provider.

Expand the planner with an illustrative requirements comparison

New planning dated 27 October 2026, before implementation: following the supplied code review, strengthen the existing planner by comparing a small, explicit set of user-entered application requirements with a hypothetical environment. Add supported operating-system choices, minimum memory, and minimum free storage to the application side; add one target operating system, available memory, and available free storage to the environment side. Keep the existing application/target names, optional notes, and human-review topics.

For each comparison, show Pass only when both values are present and the stated requirement is met; show Blocker when both values are known and the environment does not meet the stated requirement; show Warning when either value is unknown or not comparable. The combined result is Blocker if any comparison is a blocker, Warning if no blocker exists but any comparison is unknown, and Pass only if all three comparisons pass. Generate different review guidance from the individual outcomes. A selected operating-system mismatch is an explicitly user-entered hypothetical mismatch, not a verified compatibility verdict.

Keep the tool local to the page: no device inspection, external data, storage, server request, or download. Use native labelled controls, fieldsets, text-only DOM insertion, visible focus, and a polite status update. Explain nearby that the comparisons use visitor-entered information and are not an actual UAR, compatibility, security, or safety assessment. Preserve the existing eight-page structure and design system. Do not create or relabel wireframes to suggest this later feature was part of original planning. Test pass, blocker, unknown, combined outcomes, invalid values, special-character input, reset, keyboard operation, narrow layouts, and browser errors.

Use six primary navigation links

The header keeps Home, Features, How It Works, Compatibility, Security and About. Use Cases and FAQ remain in the footer and are also linked contextually. This follows the supplied navigation plan and avoids an eight-link header at narrow widths.

Use native structure before extra interaction

Workflow stages use an ordered list because their sequence matters. FAQ answers use native `details` and `summary`; one answer per group begins open so not every essential answer is hidden. The browser's disclosure marker provides a visible expanded/collapsed state without JavaScript.

Use simple responsive CSS

Grid and Flexbox handle columns and wrapping. The 840px breakpoint changes two/three-column content and the header to a stacked layout; the 520px breakpoint narrows side padding and makes hero links full width. The 768px test therefore uses the stacked layout, while 1024px uses wider columns. The diagram has a separate 1180px breakpoint because the hero's side-by-side columns do not leave enough width for four readable labels at medium sizes. `minmax(0, 1fr)` lets grid columns shrink within their available track instead of being forced wider by long content. `overflow-wrap: anywhere` only breaks a word when needed, preventing enlarged text from creating horizontal overflow. Below 1180px the homepage diagram stacks its labelled steps and rotates the arrows down; above it the flow is horizontal.

Remove the sticky header

The first build kept the header stuck at the top. The review removed that behaviour because it could occupy a substantial portion of a small screen and obscure in-page destinations. A normal document-flow header keeps fragment navigation and content visible.

Use an illustrative diagram, not a product screenshot

No approved runtime screenshots or product interface evidence was supplied. The homepage uses a small HTML/CSS flow diagram with an accessible caption that labels it as an illustration. There are no external image assets, so image sharpness and aspect ratio are not applicable to this build.

Keep status labels conceptual

Pass, Warning and Blocker are used only as explanations of a possible review model. The pages now explicitly say that they are not live scan results or safety certifications.

Add a small static not-found page

The `404.html` utility route reuses the established header, navigation, footer, spacing and typography instead of introducing a new visual system. It explains the missing page and provides a direct Home link plus two useful destinations; it does not add a browser-history control or automatic redirect. No new wireframe was created. This note records the implementation rationale, not evidence that a separate design plan or wireframe preceded the code change. The intended host's 404 mapping and the exact automatic-redirect expectation in M(iv) remain unverified.

Prepare Heroku hosting without exposing project documentation

Planning recorded 27 October 2026, before server implementation: the user selected Heroku as the intended host. The site is static HTML/CSS/JavaScript, so use a small Python WSGI application served by Waitress on Heroku's assigned `PORT`. The WSGI app serves only the public page files, stylesheet and planner script; an allowlist keeps research, assessment documents, screenshots and Git metadata out of HTTP responses. Unknown paths return the existing `404.html` body with HTTP 404, while any automatic-redirect interpretation remains explicit. Avoid a database and application framework. Verify request routing, status codes, MIME types, HEAD behavior and private-path rejection locally before any deployment. Heroku account, pricing/billing, app creation and actual public deployment remain separate owner-controlled steps.

To avoid uploading test responses, wireframes, review evidence or the full local Git history as part of a Heroku deployment, create an ignored release folder from an explicit list of runtime files. The release gets its own Git repository only when the owner follows the deployment steps; the source workspace's Git history and remotes stay unchanged.

This Heroku option was prepared and tested locally, then superseded as the current hosting trial by the Netlify Drop plan below. No Heroku app was created or deployed.

Prepare a static release for a free hosting trial

Planning recorded 27 October 2026, before creating the static release package: the owner asked to try a free deployment platform instead of proceeding with Heroku. Netlify Drop is the selected trial because its current official pricing lists a Free plan at $0 and its official Drop page accepts a folder or ZIP without requiring a Git remote. Confirm current account terms and usage limits before publishing. The website itself is static HTML, CSS and JavaScript; the Python WSGI server is only needed for the previous Heroku hosting option.

Prepare a separate ignored `build/netlify/` folder containing only the eight site pages, `404.html`, stylesheet and planner script. Do not copy the Python server, dependencies, README, test records, visitor notes, wireframes, screenshots or Git data. The custom error page uses root-relative asset and navigation URLs so it remains usable when shown for a missing URL at any path depth. Keep the existing Heroku package and source Git repository separate. The owner later supplied the public Netlify URL; its published routes, custom 404 behavior and comparison with current local assets were checked on 27 October 2026. Account ownership and billing/usage details were not inspected.

Layout differences recorded after implementation

The review planner is a new post-implementation feature recorded in the dated decision above; the existing wireframes remain retrospective reconstructions and have not been edited to imply original planning. Its browser behavior has been locally rechecked, and current captures are indexed in the evidence README. The small 404 utility page follows the existing design system and is recorded separately above. The Heroku adapter is a hosting implementation addition and is not shown in the retrospective wireframes. Further significant design changes should be planned and documented here before implementation. The remaining device, assistive-technology, hosted not-found and independent-visitor checks are tracked in [manual-test-sheet.md](manual-test-sheet.md).

- The header now follows the supplied six-link primary navigation, with Use Cases and FAQ in the footer and contextual links.
- The workflow list is semantic and ordered; the previous display used generic `div` elements.
- The FAQ has four stable category fragments and eleven questions. One answer per category is initially visible through native disclosure.
- The feature page now has four distinct review areas rather than six overlapping cards, and use cases are clearly labelled as hypothetical.
- The mobile/tablet header is no longer sticky. This improves content visibility and avoids an overlay on long pages.
- The homepage diagram uses a vertical, labelled flow with downward arrows at 1180px and below; the wide desktop version remains horizontal.
- The desktop footer now uses three columns so its “More” links do not wrap alone beneath the first two groups.
- The five unheaded layout-only wrappers flagged by Nu HTML Checker were changed from `section` to `div`; meaningful FAQ category sections remain labelled sections.
- The visually-hidden caption utility uses a one-pixel box with overflow hidden so the text remains available to assistive technology. Jigsaw's CSS 3 checker did not recognise `clip-path`, so that unsupported declaration was removed.

The Features page also contains the client-side review planner documented above. This is a new post-implementation addition and is not shown in the retrospective wireframes.

These are review revisions, not claimed changes made during original pre-coding planning.
