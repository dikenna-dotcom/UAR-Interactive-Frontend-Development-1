# Assessment requirements and evidence matrix

## Authority and boundaries

This is a working matrix against the supplied `UAR_COPILOT_MASTER_BRIEF.md`, primarily sections 18 and 19. The official course grid is incomplete in the supplied material, so this is not an official assessment result and does not predict a grade.

The supplied brief explicitly says that some official wording is absent, including the start of learning outcome 1 and intervening criterion rows. Those omissions remain “official wording not supplied”; no IDs or criterion wording have been invented. The current website and local evidence do not replace the missing official brief.

## Six mandatory requirements

| Requirement | Implementation location | Actual evidence reviewed | Status | Remaining work |
| --- | --- | --- | --- | --- |
| Custom static HTML5/CSS3, minimum pages/areas | Eight root HTML files; `assets/css/style.css` | Eight pages rendered locally; final HTML and CSS validator results are saved in `docs/evidence/` | Locally implemented | Revalidate after any source change |
| Main navigation and structured layout | Header/footer on all eight pages | Six primary destinations; current-page state checked; footer holds all eight; common landmarks/headings | Locally implemented | Retest after any navigation change |
| README explains purpose and user value | `README.md` | Audience, owner goals, six stories and acceptance checks are linked to page routes | Locally implemented | Learner should review and supply any required personal reflection |
| Git and GitHub version control | No repository metadata present | `git rev-parse --is-inside-work-tree` returned “not a git repository”; no verified history or remote | **Not met** | Learner must decide/set up an authorised repository and create genuine incremental commits; do not fabricate past history |
| External-source attribution | `README.md`, `docs/research.md` | Five research sources linked to specific README/HTML/CSS files; no third-party code/assets were added | Partially evidenced | Confirm whether the course requires a specific AI acknowledgement format; ensure citations remain exact |
| Final deployment | README deployment section; local server only | No public remote, hosting configuration or deployed URL; deployment was not authorised | **Not met / pending approval** | Requires explicit approval, actual publication, and hosted parity tests |

## Supplied pass criteria

| Criterion | Implementation location | Evidence actually checked | Status | Remaining work |
| --- | --- | --- | --- | --- |
| 1.4 readable foreground / backgrounds | All pages; shared tokens in `assets/css/style.css` | Nine selected contrast pairs exceed 4.5:1 in `docs/evidence/contrast-results.txt`; an enlarged-text simulation was checked at 320px | Locally reviewed | Manual perception, real browser zoom and assistive-technology review remain; no full WCAG claim |
| 1.5 consistent graphics | Homepage process diagram and shared styles | One HTML/CSS diagram treatment; no downloaded or raster graphics | Locally reviewed | Owner should confirm illustrative diagram is appropriate |
| 1.6 control over media/pop-ups | All pages | No media, autoplay, pop-ups or scripts found | Not applicable; no media/pop-ups | None unless such content is added |
| 2.1 eight-page purpose | Eight HTML files | Eight distinct page roles and 40 local browser captures; acceptance checks are in README and testing record | Locally implemented | Independent visitor comprehension remains untested |
| 2.2 custom CSS passes Jigsaw with no issues | `assets/css/style.css` | The last successful Jigsaw CSS 3 report (0 errors, 1 custom-property warning) predates the final diagram typography/breakpoint adjustment. The follow-up request returned HTTP 500 (“Reader used”); saved JSON/text therefore records the earlier stylesheet | **Earlier stylesheet passed; current stylesheet not revalidated** | Retry the official validator when its service is available; do not treat the earlier report as current CSS evidence |
| 2.3 every page passes W3C HTML | All eight HTML files | Final Nu report lists zero errors, warnings and informational messages for all pages; see `docs/evidence/w3c-validation.json` | **Pass on final files** | Rerun after any HTML change |
| 2.4 image quality/aspect ratio | Homepage diagram; no image files | No raster images exist. Diagram is text/HTML and reflows at narrow widths | Not applicable to raster images; diagram locally reviewed | Check again if any images are added |
| 2.5 external links open separately | All eight page bodies | No external website anchors exist in the site; all navigational anchors are local | Not applicable to current site | If an external site link is added, use a new tab, `rel="noopener noreferrer"` and accessible new-tab notice |
| 2.6 responsive layout | `assets/css/style.css` media queries at 1180px (home diagram), 840px and 520px | All eight pages measured at 320, 390, 768, 1024 and 1440px with no horizontal overflow; diagram labels fit on one line in horizontal layout at 1181px, 1200px and 1440px; at 320px, the 200% root-font simulation also had no overflow | Locally verified in tested browser | Physical device, second browser and real browser zoom remain untested |
| 2.7 semantic HTML/landmarks/headings | All eight pages | Final Nu report is clear; each page has one `main`, one H1, labelled primary navigation and footer; ordered workflow and definition list | Locally reviewed and validator-passed | Retest after any markup update; screen reader not tested |
| 2.8 specific understandable content | Eight page bodies; `docs/content-register.md` | Claims revised to be conceptual/hypothetical, and scope explicitly says no live service | Locally reviewed | Owner must approve product facts beyond supplied master brief |
| 2.9 intuitive navigation | Header, contextual links, footer | Six primary links; footer has all eight; current-page state, local targets and FAQ fragments checked | Locally implemented | Independent user journey testing remains |
| 3.1 README purpose/user value/deployment | `README.md` | Purpose, audience, stories, local preview, deployment pending and credits documented | Locally implemented | Add actual deployment details only after approval and hosting |
| 3.2 genuine finished screenshots | `docs/evidence/README.md` and 40 PNGs | Full-page local browser captures cover each page at all five widths; gallery links them to relevant stories | Locally evidenced | Refresh captures after any visible UI/layout change |
| 3.3 source comments/dependencies | HTML/CSS and README | No external code/library files; stylesheet has section comments; research credits are recorded | Locally reviewed | Confirm the course's assistance-attribution expectations |
| 4.2 descriptive Git history | No `.git` present | No commits exist in this folder | **Not met** | Create genuine history only from this point forward if authorised |
| 4.3 README Markdown | `README.md` | Headings, route table, checklists and relative links used | Locally reviewed | Run markdown/link review after evidence files are final |
| 5.1 manual functionality/usability/responsiveness | `testing.md`; screenshots | Internal targets/fragments, all five widths, keyboard skip link, native disclosure, current-page state and enlarged-text simulation have recorded results | Partially verified | Independent user feedback, complete keyboard traversal, physical-device and second-browser tests remain |
| 5.2 testing documentation | `testing.md` | Test environment, actual checks, validator outcomes, defects and unperformed checks documented | Locally implemented | Keep logs tied to final build |
| 5.3 approved deployment/parity | No hosted version | Not deployed by instruction; no URL exists | **Not met / pending approval** | Publish only after explicit approval and then run hosted parity tests |
| 5.4 no commented-out code | Eight HTML files and CSS | Source review found no commented-out executable markup/styles | Locally reviewed | Recheck before release |
| 5.5 no broken internal links/fragments | HTML and local relative links | Automated check found no missing local target or fragment across the eight pages | Locally verified | Retest after any link or filename change; deployment paths remain untested |

## Supplied merit criteria

| Criterion | Implementation location | Evidence | Status | Remaining work |
| --- | --- | --- | --- | --- |
| M(ii) first-time purpose is clear | Home page | H1/lead define the concept and link to workflow and Use Cases; developer comprehension route documented | Developer-reviewed only | Ask an independent tester to complete the task and record their actual response |
| M(iii) user stories map to implemented/verified journeys | `README.md`, `testing.md`, pages | Six stories have acceptance checks, destinations and tested local links | Partially verified | Independent user journey testing remains |
| M(v) real-world purpose and audience justified | `README.md` | Strategy connects audience, goals, stories and explicit scope | Locally implemented | Owner should confirm that audience matches actual project intent |
| M(vi) full bug record and retests | `testing.md` | Review defects have symptom, impact, cause, fix and retest entries | Locally documented | Add any defects found by learner or independent tester |
| M(vii) lifecycle documented | README, research, wireframes, testing, assessment matrix | Research and implementation notes exist; wireframes are explicitly retrospective; deployment pending | Partial | Original UX planning cannot be proved; deployment stage remains open |

## Supplied distinction craftsmanship review

| Quality area | Evidence / implementation | Status and gap |
| --- | --- | --- |
| Information hierarchy | One H1 per page, meaningful section headings and introductory answers | Locally reviewed; independent comprehension test pending |
| User control | No autoplay, pop-up, forced navigation or scripted control | Verified from source; no media interaction applies |
| Consistency | Shared header/footer and stylesheet; five-width visual evidence for all pages | Locally reviewed in one browser |
| Confirmation and feedback | Current-page indications, visible focus and native FAQ open/closed marker | Locally checked; screen-reader behavior not independently checked |
| Accessibility | Skip links, landmarks, one open FAQ answer per group, visible focus, selected contrast measurements | Partial; screen reader, physical device, real browser zoom, and broader manual audit outstanding |
| Advanced CSS technique | Content-driven media queries, Grid/Flexbox and enlarged-text reflow | Locally verified at five widths and in a 200% root-font simulation; real zoom/device behavior remains untested |
| Code craftsmanship | Shared stylesheet, section comments, no dependencies, ordinary HTML/CSS | Locally reviewed; learner should explain `minmax(0, 1fr)` and media queries |
| Defensive design | Wrapping links, flexible grid tracks, no fake controls; no raster assets to fail | Locally reviewed; browser/device matrix is limited |
| Design fidelity | 24 SVG layout records compared with current layout | Partial: they were made after implementation, so not original planning evidence |
| Testing throughout | Review testing and validator outputs recorded | Partial: original development-time test records were not available |
| Version control | No Git repository or history exists | **Not met** |
| Publishable result | Local implementation and most validator results are reviewed; the current CSS still needs a Jigsaw run after the validator returned HTTP 500; Git history, official rubric text and hosted checks remain open | **Ready for a deployment review conversation, with the CSS validation retry outstanding; not deployed or approved for publishing** |

## Missing official criterion wording

The supplied brief itself identifies missing official content: the beginning of learning outcome 1, some intermediate criteria, and specifically omitted rows such as M(i), M(iv), 4.1 and other unprovided IDs. Their official wording remains unavailable. Request the complete current assessment grid before claiming criterion-by-criterion submission readiness.

## Readiness decision

The site is **ready for a deployment review conversation**, with the remaining limitations above visible. This is not deployment approval: the site remains local and must not be published without the learner's explicit approval. Git history, complete official rubric wording, independent/device testing and Lighthouse remain incomplete. Submission readiness and any grade outcome are not established or guaranteed.
