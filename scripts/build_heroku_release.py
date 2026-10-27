"""Copy only the files needed to run the public site on Heroku."""

from pathlib import Path
import shutil


ROOT = Path(__file__).resolve().parents[1]
RELEASE = ROOT / "build" / "heroku"
PUBLIC_FILES = (
    ".python-version",
    "Procfile",
    "requirements.txt",
    "app.py",
    "index.html",
    "features.html",
    "how-it-works.html",
    "compatibility.html",
    "security.html",
    "use-cases.html",
    "about.html",
    "faq.html",
    "404.html",
    "assets/css/style.css",
    "assets/js/review-planner.js",
)


def build_release():
    """Create a clean Heroku source folder without project documentation."""
    if RELEASE.exists():
        raise FileExistsError(
            "Release folder already exists; inspect it before removing or replacing it."
        )

    RELEASE.mkdir(parents=True)
    for relative_path in PUBLIC_FILES:
        source = ROOT / relative_path
        destination = RELEASE / relative_path
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, destination)

    print("Prepared Heroku release at %s" % RELEASE)
    print("Copied %s public runtime files." % len(PUBLIC_FILES))


if __name__ == "__main__":
    build_release()
