#!/usr/bin/env python3
import os
import html
from datetime import datetime
from pathlib import Path
from pdfminer.high_level import extract_text

ROOT = Path(__file__).resolve().parents[1]
PDF_DIR = ROOT / "insights" / "source-pdfs"
OUT_DIR = ROOT / "insights"

# Map PDFs to output files and metadata
ARTICLES = [
    {
        "pdf": "AI Transformation in Midstream Oil and Gas Sector.pdf",
        "out": "state-of-ai-midstream.html",
        "title": "The state of AI in midstream oil and gas",
        "category": "Oil & Gas AI",
        "badge": "badge-oilgas",
        "hero": "category-oilgas",
        "date": "September 28, 2025",
    },
    {
        "pdf": "Ai coming.pdf",
        "out": "is-ai-coming-for-your-job.html",
        "title": "Is AI coming for your job?",
        "category": "Workforce & AI",
        "badge": "badge-workforce",
        "hero": "category-workforce",
        "date": "September 26, 2025",
    },
    {
        "pdf": "Entreprenurial.pdf",
        "out": "best-time-entrepreneurial-dreams.html",
        "title": "Why now is the best time ever to chase your entrepreneurial dreams",
        "category": "Entrepreneurship",
        "badge": "badge-entre",
        "hero": "category-entre",
        "date": "September 24, 2025",
    },
    {
        "pdf": "AEO.pdf",
        "out": "answer-engine-optimization.html",
        "title": "The importance of answer engine optimization for your business",
        "category": "Answer Engines",
        "badge": "badge-answer",
        "hero": "category-answer",
        "date": "September 22, 2025",
    },
    {
        "pdf": "AI Proof.pdf",
        "out": "ai-proof-trades-under-1000.html",
        "title": "Five AI‑proof trade businesses you can start this week for $1,000 or less",
        "category": "Small Business",
        "badge": "badge-smallbiz",
        "hero": "category-smallbiz",
        "date": "September 20, 2025",
    },
]

HEAD = """<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <title>{title} - C&L Strategy</title>
  <meta name=\"description\" content=\"{meta}\">
  <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">
  <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>
  <link href=\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap\" rel=\"stylesheet\">
  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css\">
  <link rel=\"stylesheet\" href=\"../css/style.css?v=20250927\">
  <link rel=\"icon\" type=\"image/svg+xml\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cellipse cx='50' cy='25' rx='8' ry='12' fill='%23ff6b35'/%3E%3Crect x='42' y='35' width='16' height='40' rx='2' fill='%23d4af37'/%3E%3Crect x='40' y='75' width='20' height='8' rx='4' fill='%23b8860b'/%3E%3C/svg%3E\">
</head>
<body>
<nav class=\"navbar\" id=\"navbar\">
  <div class=\"nav-container\">
    <div class=\"nav-logo\">
      <div class=\"logo-icon\">
        <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"candle-icon\"><ellipse cx=\"12\" cy=\"6\" rx=\"2\" ry=\"3\" fill=\"#ff6b35\"/><rect x=\"9\" y=\"8\" width=\"6\" height=\"12\" rx=\"1\" fill=\"currentColor\"/><rect x=\"8\" y=\"20\" width=\"8\" height=\"2\" rx=\"1\" fill=\"#b8860b\"/></svg>
      </div>
      <div class=\"logo-text\"><span class=\"company-name\">C&L Strategy</span><span class=\"tagline\">Illuminating Solutions</span></div>
    </div>
    <div class=\"nav-menu\" id=\"nav-menu\">
      <a href=\"../index.html\" class=\"nav-link\">Home</a>
      <a href=\"../services.html\" class=\"nav-link\">Services</a>
      <a href=\"../about.html\" class=\"nav-link\">About</a>
      <a href=\"../sequelmatch-ai.html\" class=\"nav-link\">SequelMatch AI</a>
      <a href=\"../insights.html\" class=\"nav-link active\">Insights</a>
      <a href=\"../contact.html\" class=\"nav-link\">Contact</a>
    </div>
    <div class=\"nav-toggle\" id=\"nav-toggle\"><span class=\"bar\"></span><span class=\"bar\"></span><span class=\"bar\"></span></div>
  </div>
</nav>
"""

FOOT = """
<footer class=\"footer\">
  <div class=\"container\">
    <div class=\"footer-content\">
      <div class=\"footer-section\">
        <div class=\"footer-logo\">
          <div class=\"logo-icon\">
            <svg viewBox=\"0 0 24 24\" fill=\"currentColor\" class=\"candle-icon\"><ellipse cx=\"12\" cy=\"6\" rx=\"2\" ry=\"3\" fill=\"#ff6b35\"/><rect x=\"9\" y=\"8\" width=\"6\" height=\"12\" rx=\"1\" fill=\"currentColor\"/><rect x=\"8\" y=\"20\" width=\"8\" height=\"2\" rx=\"1\" fill=\"#b8860b\"/></svg>
          </div>
          <div class=\"logo-text\"><span class=\"company-name\">C&L Strategy</span><span class=\"tagline\">Illuminating Solutions</span></div>
        </div>
        <p class=\"footer-description\">Guiding organizations through transformation with strategic clarity, innovative solutions, and unwavering commitment to excellence.</p>
      </div>
      <div class=\"footer-section\"><h4 class=\"footer-title\">Services</h4><ul class=\"footer-links\"><li><a href=\"../services.html#digital\">Digital Consulting</a></li><li><a href=\"../services.html#finance\">Business Accounting & Finance</a></li><li><a href=\"../services.html#process\">Process Improvement</a></li><li><a href=\"../services.html\">All Services</a></li></ul></div>
      <div class=\"footer-section\"><h4 class=\"footer-title\">Company</h4><ul class=\"footer-links\"><li><a href=\"../about.html\">About Us</a></li><li><a href=\"../insights.html\">Insights</a></li><li><a href=\"../contact.html\">Contact</a></li><li><a href=\"#\">Careers</a></li></ul></div>
      <div class=\"footer-section\"><h4 class=\"footer-title\">Connect</h4><div class=\"social-links\"><a href=\"#\" aria-label=\"LinkedIn\"><i class=\"fab fa-linkedin\"></i></a><a href=\"#\" aria-label=\"Twitter\"><i class=\"fab fa-twitter\"></i></a><a href=\"#\" aria-label=\"Email\"><i class=\"fas fa-envelope\"></i></a></div></div>
    </div>
    <div class=\"footer-bottom\"><p>&copy; 2025 C&L Strategy. All rights reserved. | Illuminating business excellence since inception.</p></div>
  </div>
</footer>
<script src=\"../js/main.js?v=20250927\"></script>
</body>
</html>
"""

ARTICLE_HEADER = """
<section class=\"article-header {hero}\">
  <div class=\"container\">
    <a class=\"back-link\" href=\"../insights.html\"><i class=\"fas fa-arrow-left\"></i> Back to Insights</a>
    <div class=\"insight-meta\"><span class=\"insight-category {badge}\">{category}</span> <time class=\"insight-date\">{date}</time></div>
    <h1 class=\"article-title\">{title}</h1>
  </div>
</section>
"""

ARTICLE_BODY = """
<section class=\"article-content\">
  <div class=\"container\">
    <p><a class=\"btn btn-outline\" href=\"{pdf_href}\" target=\"_blank\" rel=\"noopener\"><i class=\"fas fa-file-pdf\"></i> Download PDF</a></p>
    {content}
  </div>
</section>
"""

def text_to_html_paragraphs(txt: str) -> str:
    # Normalize whitespace
    txt = txt.replace('\r\n', '\n').replace('\r', '\n')
    # Collapse excessive spaces
    txt = '\n'.join([line.strip() for line in txt.split('\n')])
    # Split into paragraphs on blank lines
    parts = [p.strip() for p in txt.split('\n\n') if p.strip()]
    html_ps = []
    for p in parts:
        # Replace single newlines inside paragraph with space
        p_clean = ' '.join([s for s in p.split('\n') if s.strip()])
        p_clean = html.escape(p_clean)
        html_ps.append(f"<p>{p_clean}</p>")
    return "\n\n".join(html_ps)


def build_meta_description(txt: str, fallback: str) -> str:
    t = ' '.join(txt.split())
    if not t:
        return fallback
    # Take first 200 chars
    return t[:200]


def main():
    assert PDF_DIR.exists(), f"PDF directory not found: {PDF_DIR}"
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    for a in ARTICLES:
        pdf_path = PDF_DIR / a["pdf"]
        if not pdf_path.exists():
            # Try alternate location if user placed PDFs directly under insights/
            alt = OUT_DIR / a["pdf"]
            if alt.exists():
                pdf_path = alt
        if not pdf_path.exists():
            print(f"WARN: Missing PDF for {a['title']}: {pdf_path}")
            continue
        print(f"Extracting: {pdf_path.name}")
        try:
            raw = extract_text(str(pdf_path))
        except Exception as e:
            print(f"ERROR extracting {pdf_path.name}: {e}")
            continue
        content_html = text_to_html_paragraphs(raw)
        meta = build_meta_description(raw, a["title"])

        # Build full HTML
        head = HEAD.format(title=html.escape(a["title"]), meta=html.escape(meta))
        header = ARTICLE_HEADER.format(hero=a["hero"], badge=a["badge"], category=html.escape(a["category"]), date=html.escape(a["date"]), title=html.escape(a["title"]))
        pdf_href = f"source-pdfs/{a['pdf']}"
        body = ARTICLE_BODY.format(pdf_href=html.escape(pdf_href), content=content_html)
        html_out = f"{head}\n{header}\n{body}\n{FOOT}"

        out_path = OUT_DIR / a["out"]
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(html_out)
        print(f"Wrote: {out_path.relative_to(ROOT)}")

if __name__ == "__main__":
    main()

