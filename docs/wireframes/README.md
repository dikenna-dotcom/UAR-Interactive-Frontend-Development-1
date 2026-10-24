# Wireframe evidence

## Timing and evidence limits

The 24 SVGs in this folder were reconstructed on 24 October 2026 from the implemented pages and responsive layouts. They were created after the initial HTML and CSS implementation for comparison and documentation. They are not original pre-implementation wireframes and cannot be used as evidence that wireframe planning preceded coding.

Each drawing is a low-fidelity layout reference labelled with its page and assumed viewport: mobile (320px), tablet (768px) or desktop (1440px). Tablet drawings reflect the current 840px breakpoint, where the page layout is stacked.

## Available files

| Page | Mobile | Tablet | Desktop |
| --- | --- | --- | --- |
| Home | [home-mobile.svg](home-mobile.svg) | [home-tablet.svg](home-tablet.svg) | [home-desktop.svg](home-desktop.svg) |
| Features | [features-mobile.svg](features-mobile.svg) | [features-tablet.svg](features-tablet.svg) | [features-desktop.svg](features-desktop.svg) |
| How It Works | [workflow-mobile.svg](workflow-mobile.svg) | [workflow-tablet.svg](workflow-tablet.svg) | [workflow-desktop.svg](workflow-desktop.svg) |
| Compatibility | [compatibility-mobile.svg](compatibility-mobile.svg) | [compatibility-tablet.svg](compatibility-tablet.svg) | [compatibility-desktop.svg](compatibility-desktop.svg) |
| Security | [security-mobile.svg](security-mobile.svg) | [security-tablet.svg](security-tablet.svg) | [security-desktop.svg](security-desktop.svg) |
| Use Cases | [use-cases-mobile.svg](use-cases-mobile.svg) | [use-cases-tablet.svg](use-cases-tablet.svg) | [use-cases-desktop.svg](use-cases-desktop.svg) |
| About | [about-mobile.svg](about-mobile.svg) | [about-tablet.svg](about-tablet.svg) | [about-desktop.svg](about-desktop.svg) |
| FAQ | [faq-mobile.svg](faq-mobile.svg) | [faq-tablet.svg](faq-tablet.svg) | [faq-desktop.svg](faq-desktop.svg) |

## Comparison with the implementation

The drawings show the implemented reading order and the responsive change from one column to two or three columns above 840px. The actual homepage uses a CSS-built process diagram, and the workflow page uses an ordered list; these details were kept in the reconstructions. The home diagram stacks its steps with downward arrows at 1180px and below; the wide layout remains horizontal. The mobile navigation wraps visibly rather than becoming a hidden menu.

Because these are retrospective layout records, the project cannot make a valid original-wireframe-to-final-design comparison. The only supported comparison is between these later layout reconstructions and the current browser rendering. Meaningful differences found during review are recorded in [design-decisions.md](../design-decisions.md).
