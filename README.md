# UAR - Universal Application Runtime

UAR is presented as a proposed model for reviewing an application's requirements, compatibility with an environment, security and policy concerns, and possible execution strategies. This repository contains a static, eight-page information website. It does not contain a working runtime and does not inspect devices or uploaded files.

**Deployment: pending explicit approval.** This local project has not been published or pushed to a public remote.

## Strategy

### Audience and owner goals

The intended audience is a first-time visitor or stakeholder who wants to understand the UAR concept, its limitations and the questions behind an application decision. The website owner's goals, as set out in the supplied master brief, are to explain the idea, show technical understanding and give visitors a clear route to further information.

The content is organised so a new visitor can start at Home, a returning visitor can jump to Compatibility or FAQ, and a reviewer can follow the proposed workflow and examine project scope.

### Five UX planes and design rationale

- **Strategy — why the site exists:** First-time visitors and stakeholders need to understand the proposed UAR model without mistaking this informational website for a working runtime. The six user stories turn that goal into checks for understanding, interpretation, trust, context and access.
- **Scope — what is included:** Eight focused explanatory pages, a conceptual workflow, illustrative outcomes, hypothetical scenarios and a glossary. Runtime execution, device scanning, uploads, live verdicts and security certification are excluded because this project has no evidence or implementation for those capabilities.
- **Structure — how information is grouped:** Distinct page roles let visitors choose the question they came to answer. Contextual next-reading links connect related topics; four FAQ groups separate common questions; shared navigation and footer keep the site findable without duplicating full explanations across pages.
- **Skeleton — how each page is arranged:** A consistent header, one main landmark, logical headings and a shared footer provide orientation. Ordered workflow markup communicates sequence. Responsive Grid/Flexbox changes columns at content-driven breakpoints; the home diagram stacks below 1180px so its labels have room.
- **Surface — how the visual design supports use:** Dark text on a pale background, a restrained blue accent, system fonts, shared spacing and panel styles create readable hierarchy without external assets. A small HTML/CSS diagram illustrates the concept and is explicitly labelled as illustrative.

The detailed layout choices and documented differences from the retrospective wireframes are in [docs/design-decisions.md](docs/design-decisions.md). Current screenshots and local checks are indexed in [docs/evidence/README.md](docs/evidence/README.md) and [testing.md](testing.md); the unperformed manual checks have a separate [manual test sheet](docs/manual-test-sheet.md). This review update changes documentation and evidence only, not the visual design.

### User stories and acceptance checks

1. **Understand UAR:** As a first-time visitor, I want to identify the purpose of UAR from the site itself.
   - Acceptance: Home defines UAR as a proposed decision model, states what this static website does not do, and links to the workflow and use cases.
2. **Follow the concept:** As a stakeholder, I want to understand the proposed stages.
   - Acceptance: How It Works presents five ordered stages and distinguishes compatibility review from policy review.
3. **Interpret an outcome:** As a visitor, I want to understand Pass, Warning and Blocker without mistaking them for a safety guarantee.
   - Acceptance: Compatibility defines the labels as illustrative and links to Security and the FAQ.
4. **Check trust and boundaries:** As a visitor, I want to know whether this site runs or assesses software.
   - Acceptance: Security and About state that this build is informational and makes no live security or compatibility assessment.
5. **Find relevant context:** As a visitor with a practical question, I want a relevant scenario or definition.
   - Acceptance: Use Cases uses explicitly hypothetical examples; FAQ has four categories and a semantic glossary.
6. **Use the site on a narrow screen or keyboard:** As a visitor, I want the content and navigation to remain available.
   - Acceptance: the primary links wrap instead of disappearing, each page has a skip link, and keyboard focus is visible.

These are developer-defined acceptance checks, not claims from user research. No independent visitor comprehension study has been performed.

## Scope

### Included

- Eight connected static pages that explain the proposed concept.
- Semantic HTML landmarks, headings, ordered workflow, FAQ disclosures and glossary.
- One custom CSS file with a small set of design tokens and responsive Grid/Flexbox layouts.
- Original HTML/CSS workflow illustration with a text alternative.

### Excluded

- Runtime execution, device scanning, file uploads, live analysis, compatibility verdicts, security certification, downloads, sign-in, analytics and data collection.
- Claims about supported operating systems, customers, partnerships, pricing or shipping status; no approved facts for those were supplied.
- JavaScript and third-party UI libraries; the static content does not need them.

## Structure

| Page | Purpose |
| --- | --- |
| [Home](index.html) | Introduces the concept, boundary and next steps |
| [Features](features.html) | Explains four proposed review areas |
| [How It Works](how-it-works.html) | Presents the five-stage conceptual sequence |
| [Compatibility](compatibility.html) | Defines illustrative outcome labels and limitations |
| [Security](security.html) | Separates technical fit from policy, privacy and security questions |
| [Use Cases](use-cases.html) | Gives three hypothetical scenarios |
| [About](about.html) | States the purpose and current scope of this website |
| [FAQ](faq.html) | Answers eleven questions in four groups and defines key terms |

The six primary header links are Home, Features, How It Works, Compatibility, Security and About. Use Cases and FAQ are linked from Home, relevant next-reading sections and the footer. The footer contains all eight destinations. All local navigation stays in the same tab.

## Skeleton: wireframes and implementation comparison

All 24 mobile/tablet/desktop SVGs are linked below and in [docs/wireframes/README.md](docs/wireframes/README.md). **They were reconstructed after the initial HTML/CSS implementation on 24 October 2026. They are not original planning artefacts and do not demonstrate that wireframes preceded coding.**

| Page | Mobile (320px) | Tablet (768px) | Desktop (1440px) |
| --- | --- | --- | --- |
| Home | [SVG](docs/wireframes/home-mobile.svg) | [SVG](docs/wireframes/home-tablet.svg) | [SVG](docs/wireframes/home-desktop.svg) |
| Features | [SVG](docs/wireframes/features-mobile.svg) | [SVG](docs/wireframes/features-tablet.svg) | [SVG](docs/wireframes/features-desktop.svg) |
| How It Works | [SVG](docs/wireframes/workflow-mobile.svg) | [SVG](docs/wireframes/workflow-tablet.svg) | [SVG](docs/wireframes/workflow-desktop.svg) |
| Compatibility | [SVG](docs/wireframes/compatibility-mobile.svg) | [SVG](docs/wireframes/compatibility-tablet.svg) | [SVG](docs/wireframes/compatibility-desktop.svg) |
| Security | [SVG](docs/wireframes/security-mobile.svg) | [SVG](docs/wireframes/security-tablet.svg) | [SVG](docs/wireframes/security-desktop.svg) |
| Use Cases | [SVG](docs/wireframes/use-cases-mobile.svg) | [SVG](docs/wireframes/use-cases-tablet.svg) | [SVG](docs/wireframes/use-cases-desktop.svg) |
| About | [SVG](docs/wireframes/about-mobile.svg) | [SVG](docs/wireframes/about-tablet.svg) | [SVG](docs/wireframes/about-desktop.svg) |
| FAQ | [SVG](docs/wireframes/faq-mobile.svg) | [SVG](docs/wireframes/faq-tablet.svg) | [SVG](docs/wireframes/faq-desktop.svg) |

The main differences noted in this review are in [design-decisions.md](docs/design-decisions.md): six instead of eight header links, ordered-list workflow markup, grouped FAQ disclosures, hypothetical use cases, a vertically stacked process diagram when its labels need more room, and a normal-flow rather than sticky header. These changes are review revisions, not a reconstructed planning history.

## Surface: visual system

- Background `#F8FAFC`; primary text `#0F172A`; supporting text `#475569`; primary accent `#1D4ED8`.
- White panels, light blue secondary panels and a dark footer.
- System font stack; no external font requests.
- CSS variables are used for common colours, spacing, radii and typography.
- Container maximum width is 72rem. Content columns use Grid/Flexbox and stack at the 840px breakpoint; side padding and hero actions adjust at 520px. The home diagram uses its own 1180px breakpoint so the flow labels remain readable.
- `minmax(0, 1fr)` lets grid columns shrink within the available width rather than expanding to fit long intrinsic text.
- Long words can wrap when necessary so enlarged text does not force horizontal scrolling.
- No raster images are used. The homepage's CSS-built diagram has a caption identifying it as an illustration.

Selected contrast ratios are recorded in [docs/evidence/contrast-results.txt](docs/evidence/contrast-results.txt) and explained in [testing.md](testing.md). They are spot measurements of authored colour pairs, not a complete WCAG conformance claim.

## Features and genuine browser screenshots

Screenshots below are captures of the locally served implementation, not mockups. They are linked to the stories they help review. All eight pages were captured at 320px, 390px, 768px, 1024px and 1440px widths; the evidence index links every capture.

| Story | Home | Relevant page | Evidence |
| --- | --- | --- | --- |
| 1. Understand UAR | [Home at 320px](docs/evidence/home-320.png) | [Home at 1440px](docs/evidence/home-1440.png) | [All Home captures](docs/evidence/README.md) |
| 2. Follow the concept | [Workflow at 320px](docs/evidence/workflow-320.png) | [Workflow at 1440px](docs/evidence/workflow-1440.png) | [All workflow captures](docs/evidence/README.md) |
| 3. Interpret an outcome | [Compatibility at 320px](docs/evidence/compatibility-320.png) | [Compatibility at 1440px](docs/evidence/compatibility-1440.png) | [All compatibility captures](docs/evidence/README.md) |
| 4. Check boundaries | [Security at 320px](docs/evidence/security-320.png) | [About at 1440px](docs/evidence/about-1440.png) | [Security and About captures](docs/evidence/README.md) |
| 5. Find scenarios/answers | [Use Cases at 320px](docs/evidence/use-cases-320.png) | [FAQ at 1440px](docs/evidence/faq-1440.png) | [All page captures](docs/evidence/README.md) |
| 6. Use the site on small screens/by keyboard | [Home at 320px](docs/evidence/home-320.png) | [FAQ at 320px](docs/evidence/faq-320.png) | [All responsive captures](docs/evidence/README.md) |

## Technologies

- HTML5 and custom CSS3
- VS Code as the intended editing environment
- Python 3.12.10 `http.server` for the verified local preview
- Integrated browser in VS Code (reported user agent: Chromium 150, Electron 43.7.7) for responsive and interaction checks
- Official W3C Nu HTML Checker for page validation
- The current custom stylesheet passed the official Jigsaw CSS 3 validator with zero errors and zero warnings; its exact file fingerprint and response are saved in `docs/evidence/jigsaw-validation.json`

No JavaScript, CSS framework, package manager, build process or backend is used.

## Development and review history

The workspace contained no Git repository or prior commits when inspected on 24 October 2026. The development before this review therefore has no recoverable commit-by-commit history; it has not been reconstructed. A local repository was initialized and the current workspace snapshot was recorded as commit `85f84cc` (`Record current workspace baseline`), explicitly as a present-day baseline rather than an earlier development event. Subsequent review changes are recorded in separate local commits. No remote is configured and nothing has been pushed.

## Testing

See [testing.md](testing.md) for the browser version, five-width matrix, interaction checks, validator results and limitations. The separate [manual test sheet](docs/manual-test-sheet.md) identifies real-zoom/reflow, second-browser, physical-device, screen-reader and independent-visitor tasks that remain unperformed. The latest saved W3C report contains no errors or messages across all eight pages. The current `assets/css/style.css` was submitted to the official Jigsaw CSS 3 validator: HTTP 200, valid, zero errors and zero warnings. Its response and SHA-256 fingerprint are recorded in `docs/evidence/jigsaw-validation.json` and `.txt`. Lighthouse was not available in the local tools checked.

## Local setup in VS Code

1. Open this folder in VS Code using **File > Open Folder**.
2. Open the integrated terminal at the project root.
3. Run `python -m http.server 8000`.
4. Open `http://localhost:8000/` in a browser.
5. Stop the server with `Ctrl+C` when finished.

This exact Python server command was used for the current local preview. The Live Server extension is optional and was not separately tested. No package installation is required.

## Deployment

**Pending approval; not deployed.** No GitHub Pages configuration, public push, hosting URL or production parity test exists. After explicit approval, the repository must first be placed in an authorised remote and deployed using the actual hosting instructions. The eight pages, assets, links and responsive layouts must then be rechecked at the hosted URL before deployment can count as complete.

## Credits and sources

- **Product facts and scope:** supplied `UAR_COPILOT_MASTER_BRIEF.md`, especially sections 2, 7, 18 and 19. The separate runtime repository was not inspected, so no runtime implementation claim is made.
- **Research only, no code or assets reused:** see [docs/research.md](docs/research.md) for exact inspected README, HTML and CSS links to five public Code Institute milestone examples.
- **Custom HTML, CSS and written explanations:** created for this local UAR site. No downloaded media, vendor files or external libraries are included.
- **Assistance disclosure:** this site and documentation were prepared with AI assistance. Preserve any course-required AI-use acknowledgement and add the learner's own reflection where the course asks for it.

## Limitations and next work

- The official rubric has missing criterion text, including portions of learning outcome 1 and missing criterion rows. See [docs/assessment-matrix.md](docs/assessment-matrix.md); this matrix is not an official grade decision.
- The supplied rubric requires real incremental Git history and final deployment. The new local baseline and this review's separate commit do not recreate earlier development history. No GitHub remote or public deployment exists; no public action will happen without approval.
- Wireframes are retrospective and cannot prove pre-implementation planning.
- No independent user tester, screen reader, physical mobile device or second browser was available in this review.
- Lighthouse was unavailable. The current Jigsaw response reports zero errors and zero warnings.
- Product-specific facts beyond the supplied concept brief require owner confirmation before being described as current or planned capability.
