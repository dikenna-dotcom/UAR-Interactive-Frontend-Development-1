"""Serve only the public UAR website files through a WSGI server."""

from mimetypes import guess_type
from pathlib import Path
import logging
import os
from wsgiref.simple_server import make_server


ROOT = Path(__file__).resolve().parent
PORT = int(os.environ.get("PORT", "8000"))
PUBLIC_FILES = {
    "/": "index.html",
    "/index.html": "index.html",
    "/features.html": "features.html",
    "/how-it-works.html": "how-it-works.html",
    "/compatibility.html": "compatibility.html",
    "/security.html": "security.html",
    "/use-cases.html": "use-cases.html",
    "/about.html": "about.html",
    "/faq.html": "faq.html",
    "/404.html": "404.html",
    "/assets/css/style.css": "assets/css/style.css",
    "/assets/js/review-planner.js": "assets/js/review-planner.js",
}


def application(environ, start_response):
    """Return an allowlisted page or a branded 404 response."""
    method = environ.get("REQUEST_METHOD", "GET").upper()
    requested_path = environ.get("PATH_INFO", "/")

    if method not in {"GET", "HEAD"}:
        body = b"Method not allowed."
        start_response(
            "405 Method Not Allowed",
            [
                ("Allow", "GET, HEAD"),
                ("Content-Type", "text/plain; charset=utf-8"),
                ("Content-Length", str(len(body))),
                ("X-Content-Type-Options", "nosniff"),
            ],
        )
        return [body]

    if requested_path == "/favicon.ico":
        start_response("204 No Content", [("Content-Length", "0")])
        return []

    relative_path = PUBLIC_FILES.get(requested_path)
    status = "200 OK"
    if relative_path is None:
        relative_path = "404.html"
        status = "404 Not Found"

    file_path = ROOT / relative_path
    try:
        body = file_path.read_bytes()
    except OSError:
        logging.exception("Unable to read public site file: %s", relative_path)
        body = b"Site file unavailable."
        start_response(
            "500 Internal Server Error",
            [
                ("Content-Type", "text/plain; charset=utf-8"),
                ("Content-Length", str(len(body))),
                ("X-Content-Type-Options", "nosniff"),
            ],
        )
        return [body]

    content_type = guess_type(file_path.name)[0] or "application/octet-stream"
    if content_type.startswith("text/") or content_type in {
        "application/javascript",
        "application/xhtml+xml",
    }:
        content_type += "; charset=utf-8"

    start_response(
        status,
        [
            ("Content-Type", content_type),
            ("Content-Length", str(len(body))),
            ("X-Content-Type-Options", "nosniff"),
        ],
    )
    return [body if method == "GET" else b""]


if __name__ == "__main__":
    server = make_server("127.0.0.1", PORT, application)
    print("Serving UAR website locally on port %s" % PORT, flush=True)
    server.serve_forever()
