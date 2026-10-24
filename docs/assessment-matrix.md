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
| Git and GitHub version control | Local repository; no remote | The inspected workspace had no Git repository or prior commits. Local commit `85f84cc` records the then-current workspace as a present-day baseline; this review's changes are committed separately. No GitHub remote or public push exists | **Partially met; prior development history unavailable** | Continue genuine commits for future work. GitHub publication remains pending explicit approval; do not fabricate earlier history |
| External-source attribution | `README.md`, `docs/research.md` | Five research sources linked to specific README/HTML/CSS files; no third-party code/assets were added | Partially evidenced | Confirm whether the course requires a specific AI acknowledgement format; ensure citations remain exact |
| Final deployment | README deployment section; local server only | No public remote, hosting configuration or deployed URL; deployment was not authorised | **Not met / pending approval** | Requires explicit approval, actual publication, and hosted parity tests |

## Supplied pass criteria

| Criterion | Implementation location | Evidence actually checked | Status | Remaining work |
| --- | --- | --- | --- | --- |
| 1.4 readable foreground / backgrounds | All pages; shared tokens in `assets/css/style.css` | Nine selected contrast pairs exceed 4.5:1 in `docs/evidence/contrast-results.txt`; an enlarged-text simulation was checked at 320px | Locally reviewed | Manual perception, real browser zoom and assistive-technology review remain; no full WCAG claim |
| 1.5 consistent graphics | Homepage process diagram and shared styles | One HTML/CSS diagram treatment; no downloaded or raster graphics | Locally reviewed | Owner should confirm illustrative diagram is appropriate |
| 1.6 control over media/pop-ups | All pages | No media, autoplay, pop-ups or scripts found | Not applicable; no media/pop-ups | None unless such content is added |
| 2.1 eight-page purpose | Eight HTML files | Eight distinct page roles and 40 local browser captures; acceptance checks are in README and testing record | Locally implemented | Independent visitor comprehension remains untested |
| 2.2 custom CSS passes Jigsaw with no issues | `assets/css/style.css` | Submitted current file to the official Jigsaw CSS 3 validator; HTTP 200, `validity: true`, 0 errors and 0 warnings. Submitted-file SHA-256 and response are recorded in `docs/evidence/jigsaw-validation.json` and `.txt` | **Pass for recorded file fingerprint** | Rerun after any future CSS changes |
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
| 4.2 descriptive Git history | Local `.git` history | Commit `85f84cc` records the current files as found; later review edits are in a separate commit. No earlier history is available | **Partially met; earlier history unavailable** | Continue descriptive commits for actual future development; do not invent the missing past |
| 4.3 README Markdown | `README.md` | Headings, route table, checklists and relative links used | Locally reviewed | Run markdown/link review after evidence files are final |
| 5.1 manual functionality/usability/responsiveness | `testing.md`; screenshots; `docs/manual-test-sheet.md` | Local route/link checks, five viewport widths, one skip-link path, one disclosure interaction and an enlarged-root-font simulation are recorded. Real 200%/400% browser zoom, physical device, second browser, screen reader and independent user tasks remain pending | Partially verified | Complete and record the outstanding manual test sheet; do not treat the simulation as a real zoom test |
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
| Version control | A local baseline and a separate review commit now exist; earlier development history is unavailable and no remote is configured | **Partial; mandatory GitHub publication and authentic earlier incremental history are not evidenced** |
| Publishable result | Local implementation is reviewed and current CSS passes Jigsaw; missing official criterion wording, incomplete historical version control, unperformed manual checks and hosted deployment remain open | **Not submission-ready; mandatory GitHub publication and deployment remain outstanding and are prohibited until explicit approval** |

## Missing official criterion wording

The supplied brief (section 18.1) identifies omissions but does not include the complete current official grid. The exact missing material that can be named from the supplied text is:

- The beginning of learning outcome 1, including its criterion identifier and wording; the snippet only notes UX structure, clear headers and prioritised information before criterion 1.4, and says not to guess the omitted identifier.
- Merit rows **M(i)** and **M(iv)**: explicitly named as missing, with no official wording supplied.
- Criterion **4.1**: explicitly named as missing, with no official wording supplied.
- Other intervening/omitted rows: the brief says some intervening rows are absent but supplies no complete list of identifiers or wording, so they cannot be enumerated exactly from this file.

No wording or additional criterion IDs have been inferred. Request the complete current assessment grid before claiming criterion-by-criterion assessment coverage.

## Readiness decision

### Explicit assessment requirements

| Requirement | Current evidence | Remaining action | Submission blocker? |
| --- | --- | --- | --- |
| Six mandatory requirements in §18.2, especially Git/GitHub history and final deployment | Local baseline and subsequent genuine review commits exist; there is no remote, public push or deployed site. Earlier development history cannot be recovered | Continue genuine local commits. Keep GitHub publication and deployment on hold until explicit approval; then publish/deploy and perform hosted parity checks | **Yes** — GitHub publication and deployment are mandatory in the supplied brief and remain incomplete |
| Supplied pass criteria, including 2.2, 2.3, 2.6, 5.1 and 5.5 | Jigsaw current CSS pass, W3C HTML pass on eight unchanged pages, five-width local review, link audit and saved screenshots | Complete the outstanding manual functionality/usability/responsive checks in [manual-test-sheet.md](manual-test-sheet.md); retest any findings | **Yes, while supplied criterion 5.1 remains only partially evidenced** |
| Supplied merit evidence M(ii) and M(iii) | Developer-reviewed journeys and acceptance checks are documented; no independent visitor task results are recorded | If a real tester is available, run and record the six story tasks; verify and log the journeys | **Conditional / evidence incomplete** — M(ii) specifically asks for a real tester task where available; M(iii) asks for verified journeys |
| Complete official assessment mapping | Known missing items are listed below; full grid was not supplied | Obtain the complete current official grid and map its missing rows without inference | **Coverage blocker** — full criterion-by-criterion assessment cannot yet be confirmed |

### Supplied-brief QA protocols and additional checks

These checks support assessment evidence but are not separate numbered criteria unless stated above.

| Check | Classification | Current evidence / status |
| --- | --- | --- |
| Browser zoom at 200% | Supplied brief §12 accessibility test protocol; supports 1.4, 2.6 and 5.1 | **Pending.** A 200% root-font simulation was performed; it is not equivalent to browser zoom |
| Second browser and physical mobile device | Supplied brief §12 asks to test available browsers/devices and leave unavailable checks pending; supports 2.6 and 5.1 | **Pending** |
| Screen-reader spot check | Conditional supplied brief §12 protocol; supports 2.7 and 5.1 | **Pending**; procedure is recorded in the manual test sheet |
| 400% zoom/reflow at approximately 320 CSS px | Additional stress test beyond the supplied brief's 200% zoom/reflow protocol | **Pending** |
| Lighthouse | Supplied brief §12 says to run it if available; diagnostic, not proof or a grade criterion | **Not run**; Lighthouse was unavailable in the checked local tools |

The site is **not submission-ready**: mandatory GitHub publication and final deployment remain incomplete and are on hold pending explicit approval; supplied manual testing is incomplete; and the complete official criterion grid is unavailable. Do not push or deploy publicly without approval. No grade outcome is established or guaranteed.
