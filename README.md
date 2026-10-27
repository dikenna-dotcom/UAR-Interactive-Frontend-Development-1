UAR - Universal Application Runtime

By Dikenna Okose

Project Overview

This is my Code Institute front-end milestone project. I created an eight-page website to explain the idea behind Universal Application Runtime (UAR): reviewing what an application needs, comparing those needs with a possible environment, and considering security and policy questions before deciding how it might be run.

The site is for people who are new to UAR or want a clear explanation of the concept. It gives visitors a way to follow the proposed process, understand example outcome labels and try a small requirements comparison. The website is informational; it is not the UAR runtime and does not inspect a visitor's device or application.

The site is published on Netlify: [UAR - Universal Application Runtime](https://coruscating-fudge-f55efc.netlify.app/). I checked the live pages, planner, links and responsive layouts. The [published-site review](docs/evidence/netlify-live-review.txt) records what I tested.

UX

I wanted the information to be easy to follow without making claims that the current project cannot support. I used the five UX planes to organise those decisions:

- Strategy: Help a first-time visitor understand what UAR is proposed to do, who the site is for and what the current project does not do.
- Scope: Explain the concept and include hypothetical examples and a simple comparison planner. Do not claim to run applications, scan devices or provide a verified compatibility or security assessment.
- Structure: Give each page a distinct purpose, connect related topics with links and keep the main navigation and footer consistent.
- Skeleton: Use clear headings, semantic page landmarks, an ordered workflow and responsive layouts. The navigation wraps on smaller screens instead of disappearing.
- Surface: Use dark text, a pale background, blue accents, system fonts and consistent spacing. The homepage diagram is made with HTML and CSS and is labelled as an illustration.

User stories

1. Understand UAR: A first-time visitor can explain the proposed idea and see that this website does not run it. [Home at 320px](docs/evidence/home-320.png) · [Home at 1440px](docs/evidence/home-1440.png)
2. Follow the concept: A visitor can find and describe the five proposed stages. [How It Works at 320px](docs/evidence/workflow-320.png) · [How It Works at 1440px](docs/evidence/workflow-1440.png)
3. Interpret an outcome: A visitor can explain Pass, Warning and Blocker as illustrative labels, not a safety guarantee. [Compatibility at 320px](docs/evidence/compatibility-320.png) · [Compatibility at 1440px](docs/evidence/compatibility-1440.png)
4. Check the boundaries: A visitor can find out whether the site runs or assesses software. [Security at 320px](docs/evidence/security-320.png) · [About at 1440px](docs/evidence/about-1440.png)
5. Find a relevant example or answer: A visitor can find a hypothetical scenario or a definition. [Use Cases at 320px](docs/evidence/use-cases-320.png) · [FAQ at 1440px](docs/evidence/faq-1440.png)
6. Use the site on a small screen or with a keyboard: Content and navigation remain available, links wrap, each page has a skip link and keyboard focus is visible. [Home at 320px](docs/evidence/home-320.png) · [Live planner example](docs/evidence/netlify-live-features-pass.png)

The acceptance checks and actual visitor feedback are recorded in [testing.md](testing.md). Visitor responses are limited and partly user-reported; they are not presented as a broad usability study.

How the project developed and what I learnt

The project has grown from an eight-page explanation of the UAR idea into a website with a more useful, interactive example. The exact early development sequence cannot be recovered because there was no earlier Git history when the workspace was first reviewed. The notes below describe changes supported by the project files and planning records, not a recreated timeline.

| Progress | What changed | What I learnt |
|---|---|---|
| Building the website | I kept the eight pages focused on different visitor questions and gave them shared navigation, layout and visual styling. | Clear page structure, meaningful headings and consistent navigation make a multi-page site easier to use. |
| Improving the planner | A review found that the original checklist changed very little with different inputs. I planned and then added comparisons for operating system, memory and storage, with results and guidance that respond to the entered values. | JavaScript can do more than show a fixed message: it can validate inputs, compare values, handle unknown information and explain different outcomes. |
| Making the layout more robust | I reviewed small and large screen widths, adjusted responsive layouts, kept navigation visible, and removed the sticky header. | Responsive design needs to be checked at actual widths; a layout that looks fine on desktop can take too much room or become harder to navigate on a small screen. |
| Testing and publishing | I checked markup, CSS, JavaScript, links, keyboard paths, browser zoom and the published Netlify version. I also recorded checks that remain incomplete. | Testing is stronger when I record the method and result, distinguish a user-reported check from one I performed, and avoid treating an illustrative planner result as a real assessment. |

This work gave me practice with semantic HTML, responsive CSS using Grid and Flexbox, browser form controls, JavaScript comparisons and DOM updates, and checking a static site on a host. The planner is still a limited example, and the assessor must decide whether its interaction is substantial enough for the project requirements. The fuller planning and test notes are in [design-decisions.md](docs/design-decisions.md), [testing.md](testing.md) and the [assessment matrix](docs/assessment-matrix.md).

Wireframes and design decisions

I have included 24 mobile, tablet and desktop wireframes, one at each size for all eight pages. They were reconstructed on 24 October 2026 from the implemented pages, after the initial HTML and CSS work. They are retrospective layout references, not original planning evidence.

| Page | Mobile (320px) | Tablet (768px) | Desktop (1440px) |
|---|---|---|---|
| Home | [Wireframe](docs/wireframes/home-mobile.svg) | [Wireframe](docs/wireframes/home-tablet.svg) | [Wireframe](docs/wireframes/home-desktop.svg) |
| Features | [Wireframe](docs/wireframes/features-mobile.svg) | [Wireframe](docs/wireframes/features-tablet.svg) | [Wireframe](docs/wireframes/features-desktop.svg) |
| How It Works | [Wireframe](docs/wireframes/workflow-mobile.svg) | [Wireframe](docs/wireframes/workflow-tablet.svg) | [Wireframe](docs/wireframes/workflow-desktop.svg) |
| Compatibility | [Wireframe](docs/wireframes/compatibility-mobile.svg) | [Wireframe](docs/wireframes/compatibility-tablet.svg) | [Wireframe](docs/wireframes/compatibility-desktop.svg) |
| Security | [Wireframe](docs/wireframes/security-mobile.svg) | [Wireframe](docs/wireframes/security-tablet.svg) | [Wireframe](docs/wireframes/security-desktop.svg) |
| Use Cases | [Wireframe](docs/wireframes/use-cases-mobile.svg) | [Wireframe](docs/wireframes/use-cases-tablet.svg) | [Wireframe](docs/wireframes/use-cases-desktop.svg) |
| About | [Wireframe](docs/wireframes/about-mobile.svg) | [Wireframe](docs/wireframes/about-tablet.svg) | [Wireframe](docs/wireframes/about-desktop.svg) |
| FAQ | [Wireframe](docs/wireframes/faq-mobile.svg) | [Wireframe](docs/wireframes/faq-tablet.svg) | [Wireframe](docs/wireframes/faq-desktop.svg) |

The implementation differs from those later drawings in some details, including the six-link primary navigation, ordered workflow list, grouped FAQ disclosures, hypothetical use cases and the homepage diagram stacking at narrower widths. More detail is in [the design decisions](docs/design-decisions.md) and [wireframe notes](docs/wireframes/README.md).

Features

The website has eight content pages:

| Page | What visitors can find |
|---|---|
| [Home](index.html) | The UAR idea, the scope of this website and where to go next |
| [Features](features.html) | Four proposed review areas and an interactive requirements planner |
| [How It Works](how-it-works.html) | The proposed process in five ordered stages |
| [Compatibility](compatibility.html) | Illustrative Pass, Warning and Blocker labels |
| [Security](security.html) | Security, privacy and policy considerations, separate from technical fit |
| [Use Cases](use-cases.html) | Three hypothetical examples |
| [About](about.html) | The purpose and limits of this project |
| [FAQ](faq.html) | Eleven questions in four groups, including a glossary |

There is also a branded [404 page](404.html) for hosts that support a custom not-found document. On Netlify, an unknown nested URL displays the page with working links and an HTTP 404 response; it offers a Home link rather than redirecting automatically.

Interactive planner

On the Features page, visitors can enter an application name and target environment, select supported operating systems, add minimum memory and free-storage needs, and compare them with values for a hypothetical environment. They can also add notes and select review topics.

The planner shows individual and combined Pass, Warning or Blocker outcomes, with review steps based on the entered values. A missing value results in a warning, and a known mismatch results in a blocker. Reset clears the form and results. The comparisons are examples based only on what a visitor enters; they do not verify compatibility or safety. Planner inputs are not transmitted or saved.

Technologies Used

1. HTML5 - Page content, landmarks, navigation, workflow and FAQ disclosures.
2. CSS3 - Custom responsive styling, layout, design variables and the homepage illustration.
3. JavaScript - Form validation, comparisons, generated results and reset behavior in the planner.
4. Python 3.12.10 - Used for the local preview. The current Netlify deployment is static; an optional earlier Heroku setup uses Waitress.
5. VS Code - The project editing environment and integrated browser used for local checks.
6. Git - Local version control, with a GitHub remote configured for the project repository. The latest commit is local until the pending push succeeds.

The website has no front-end framework, external fonts or third-party UI libraries. The planner script was checked with JSHint 2.13.6. HTML was checked with the W3C Nu HTML Checker and CSS with the W3C Jigsaw CSS Validator.

Testing

I tested the local site in the VS Code integrated browser and Microsoft Edge on Windows 11. The recorded responsive widths were 320px, 390px, 768px, 1024px and 1440px. All eight pages were opened at these widths; the recorded checks found no horizontal overflow. I also checked internal links and fragments, navigation, skip links, keyboard focus, FAQ disclosures and planner outcomes.

The current validation evidence records:

- HTML: All nine current HTML documents (eight content pages and `404.html`) have W3C Nu Checker evidence. The latest Features and 404 submissions returned HTTP 200 with zero messages.
- CSS: The current stylesheet passed Jigsaw CSS 3 validation with zero errors and one warning: custom properties are not statically checked.
- JavaScript: JSHint passed for the planner script using the project options.
- Browser zoom and reflow: Edge was tested at actual 200% zoom across the eight pages. A separate actual 400% zoom run found no measured horizontal overflow; its effective viewport was 253px wide, which is narrower than the intended 320px target.
- Published site: The Netlify pages, links, planner and responsive layouts were checked against this project. The live review includes the exact conditions and results.

The [test log](testing.md) includes methods, browser versions, results, fixes and retests. It also records the checks that are incomplete: a full screen-reader review, detailed evidence from a physical phone, broader independent visitor tasks and Lighthouse, which was unavailable. A phone test and a partial Narrator check were reported, but some device and test details were not recorded. The [manual test sheet](docs/manual-test-sheet.md) lists the remaining steps.

Deployment

The site is live at [https://coruscating-fudge-f55efc.netlify.app/](https://coruscating-fudge-f55efc.netlify.app/). The current static release package is prepared in `build/netlify/`. To prepare a later release, run:

```powershell
python scripts/build_netlify_release.py
```

The script will not overwrite an existing output folder. Review the generated files before uploading them through the Netlify account you control. The site has been published, but Netlify account ownership and billing details have not been checked. The detailed deployment evidence and update notes are in the [live-site review](docs/evidence/netlify-live-review.txt).

To preview the source locally in VS Code, open the project folder, start a terminal at the project root and run:

```powershell
python -m http.server 8000
```

Then open [http://localhost:8000/](http://localhost:8000/). Use `Ctrl+C` in the terminal to stop the server. No package installation is required for the static preview.

Assessment Requirements and Current Position

The supplied project requirements list seven mandatory items. The current evidence and remaining work are summarised below; this is not an assessment decision.

| Requirement | Current position |
|---|---|
| Custom HTML, CSS and JavaScript with significant interaction | The planner compares entered values and produces tailored results, but the assessor still needs to confirm that the interaction is significant enough. |
| JavaScript responses to visitor actions | Implemented and tested for planner submission, different outcomes and reset. |
| Main navigation and structured layout | Implemented across the eight connected pages. |
| README explaining the project and its value | Documented here. |
| Git and GitHub version control | The project has genuine local Git history and is connected to its GitHub repository. The latest commit has not reached GitHub yet because authentication is still needed for the push. |
| Attribution for external work | Research sources and AI assistance are acknowledged below; no external code or media are included. |
| Deployment | The site is live on Netlify and has been checked. |

The assessment matrix maps the supplied requirements and qualification criteria to evidence. Some official criterion wording was not included in the material available for this project: M(ii) and M(iii) are missing, M(viii) appears twice, and the distinction guidance is cut off. I have not guessed the missing wording. See the [assessment matrix](docs/assessment-matrix.md).

Credits

- Project concept and factual scope: Based on the supplied `UAR_COPILOT_MASTER_BRIEF.md`, especially sections 2, 7, 18 and 19. I did not inspect a separate UAR runtime repository, so this website does not claim that a runtime has been implemented.
- Research: I reviewed public Code Institute milestone examples for general ideas about README structure, user stories and CSS organisation. I did not reuse their code, wording or assets. The inspected sources and limits are listed in [docs/research.md](docs/research.md).
- Code and media: The HTML, CSS, JavaScript and diagram in this project were developed for this website. No downloaded media, external fonts or UI libraries are included.
- AI assistance: I used AI assistance while developing the website and its documentation. I have included this acknowledgement to be transparent.
