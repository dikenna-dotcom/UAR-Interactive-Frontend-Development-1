# Design decisions and review notes

## Five UX planes

1. **Strategy:** The first-time visitor needs to understand what UAR means and whether this site offers a working runtime. The owner goal is to explain the concept without implying that this static project evaluates applications.
2. **Scope:** The site covers the concept, proposed workflow, compatibility labels, security questions, hypothetical use cases, project boundaries and terminology. It excludes downloads, uploads, scanning, live verdicts, forms and operational controls.
3. **Structure:** Six primary destinations lead to the core explanation; Use Cases and FAQ remain available from the home page, contextual links and footer. Every page shares one main landmark and a clear heading hierarchy.
4. **Skeleton:** Responsive layouts were originally implemented before the SVG wireframes in this project. The 24 current wireframes are post-implementation reconstructions, not evidence of original planning.
5. **Surface:** A light background, dark body text, blue link/action colour, system fonts and a shared spacing scale support readable technical explanation. The home diagram is built from HTML and CSS; it is marked as illustrative.

## Key choices

### Use six primary navigation links

The header keeps Home, Features, How It Works, Compatibility, Security and About. Use Cases and FAQ remain in the footer and are also linked contextually. This follows the supplied navigation plan and avoids an eight-link header at narrow widths.

### Use native structure before extra interaction

Workflow stages use an ordered list because their sequence matters. FAQ answers use native `details` and `summary`; one answer per group begins open so not every essential answer is hidden. The browser's disclosure marker provides a visible expanded/collapsed state without JavaScript.

### Use simple responsive CSS

Grid and Flexbox handle columns and wrapping. The 840px breakpoint changes two/three-column content and the header to a stacked layout; the 520px breakpoint narrows side padding and makes hero links full width. The 768px test therefore uses the stacked layout, while 1024px uses wider columns. The diagram has a separate 1180px breakpoint because the hero's side-by-side columns do not leave enough width for four readable labels at medium sizes. `minmax(0, 1fr)` lets grid columns shrink within their available track instead of being forced wider by long content. `overflow-wrap: anywhere` only breaks a word when needed, preventing enlarged text from creating horizontal overflow. Below 1180px the homepage diagram stacks its labelled steps and rotates the arrows down; above it the flow is horizontal.

### Remove the sticky header

The first build kept the header stuck at the top. The review removed that behaviour because it could occupy a substantial portion of a small screen and obscure in-page destinations. A normal document-flow header keeps fragment navigation and content visible.

### Use an illustrative diagram, not a product screenshot

No approved runtime screenshots or product interface evidence was supplied. The homepage uses a small HTML/CSS flow diagram with an accessible caption that labels it as an illustration. There are no external image assets, so image sharpness and aspect ratio are not applicable to this build.

### Keep status labels conceptual

Pass, Warning and Blocker are used only as explanations of a possible review model. The pages now explicitly say that they are not live scan results or safety certifications.

## Layout differences recorded after implementation

This verification/documentation pass does not change the visual design or UI. The next planned work is manual verification on real browser zoom, a second browser, a physical phone, a screen reader and independent visitors; the exact procedures are in [manual-test-sheet.md](manual-test-sheet.md). Any later design change should be planned here before implementation. The existing wireframes remain post-implementation reconstructions.

- The header now follows the supplied six-link primary navigation, with Use Cases and FAQ in the footer and contextual links.
- The workflow list is semantic and ordered; the previous display used generic `div` elements.
- The FAQ has four stable category fragments and eleven questions. One answer per category is initially visible through native disclosure.
- The feature page now has four distinct review areas rather than six overlapping cards, and use cases are clearly labelled as hypothetical.
- The mobile/tablet header is no longer sticky. This improves content visibility and avoids an overlay on long pages.
- The homepage diagram uses a vertical, labelled flow with downward arrows at 1180px and below; the wide desktop version remains horizontal.
- The desktop footer now uses three columns so its “More” links do not wrap alone beneath the first two groups.
- The five unheaded layout-only wrappers flagged by Nu HTML Checker were changed from `section` to `div`; meaningful FAQ category sections remain labelled sections.
- The visually-hidden caption utility uses a one-pixel box with overflow hidden so the text remains available to assistive technology. Jigsaw's CSS 3 checker did not recognise `clip-path`, so that unsupported declaration was removed.

These are review revisions, not claimed changes made during original pre-coding planning.
