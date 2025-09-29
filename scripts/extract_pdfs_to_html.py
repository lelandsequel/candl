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

import re

def _preprocess_pdf_text(txt: str) -> str:
    # Normalize newlines
    txt = txt.replace('\r\n', '\n').replace('\r', '\n')
    # Remove hyphenation at line breaks: e.g., opportun-
    txt = re.sub(r"(\w)-\n(\w)", r"\1\2", txt)
    # Remove common footer/page markers
    # Drop lines that are just page numbers or 'Page X of Y'
    lines = []
    for raw in txt.split('\n'):
        s = raw.strip()
        if not s:
            lines.append("")
            continue
        if re.fullmatch(r"\d+", s):
            continue
        if re.fullmatch(r"Page\s+\d+(\s*of\s*\d+)?", s, flags=re.IGNORECASE):
            continue
        # Collapse excessive in-line spaces
        s = re.sub(r"[ \t]{2,}", " ", s)
        lines.append(s)
    # Collapse triple+ blank lines to one blank
    out = []
    blank = False
    for s in lines:
        if s == "":
            if not blank:
                out.append("")
            blank = True
        else:
            out.append(s)
            blank = False
    return "\n".join(out)


def _looks_like_heading(line: str) -> bool:
    if not line:
        return False
    if len(line) > 80:
        return False
    if line.endswith('.'):
        return False
    # Common headings by name
    common = {
        "executive summary", "introduction", "overview", "background", "methodology",
        "findings", "recommendations", "key takeaways", "conclusion", "appendix",
        "case study", "opportunities", "risks", "roadmap"
    }
    low = line.lower().strip(': ')
    if low in common:
        return True
    # All caps or Title Case short lines
    letters = [c for c in line if c.isalpha()]
    if letters:
        upper_ratio = sum(1 for c in letters if c.isupper()) / len(letters)
        if upper_ratio > 0.85 and len(line.split()) <= 10:
            return True
    words = line.split()
    if 1 <= len(words) <= 8 and all(w[:1].isupper() for w in words if w):
        return True
    return False


def _is_bullet(line: str) -> bool:
    return bool(re.match(r"^([\u2022\u2023\u25E6\u2043\u2219\*\-\u2013\u2014\u00B7])\s+", line))


def _clean_bullet_text(line: str) -> str:
    return re.sub(r"^([\u2022\u2023\u25E6\u2043\u2219\*\-\u2013\u2014\u00B7])\s+", "", line).strip()


def text_to_html_paragraphs(txt: str) -> str:
    txt = _preprocess_pdf_text(txt)
    lines = txt.split('\n')
    # Merge "soft" blank lines that are artifacts of PDF line wrapping
    merged: list[str] = []
    for i, line in enumerate(lines):
        if line.strip() != "":
            merged.append(line)
            continue
        prev = merged[-1].strip() if merged else ""
        nxt = lines[i+1].strip() if i + 1 < len(lines) else ""
        if not prev or not nxt:
            merged.append("")
            continue
        if _is_bullet(nxt) or _looks_like_heading(nxt) or _looks_like_heading(prev):
            merged.append("")
            continue
        # If previous line does not end a sentence, treat this blank as soft and skip it
        if not re.search(r"[\.!?][\)\"]*\s*$", prev):
            # skip adding the blank -> merge paragraphs
            continue
        merged.append("")
    lines = merged

    out = []
    para_buf: list[str] = []
    list_buf: list[str] = []

    def flush_para():
        nonlocal para_buf
        if para_buf:
            p = ' '.join([s.strip() for s in para_buf if s.strip()])
            out.append(f"<p>{html.escape(p)}</p>")
            para_buf = []

    def flush_list():
        nonlocal list_buf
        if list_buf:
            items = ''.join(f"<li>{html.escape(it)}</li>" for it in list_buf)
            out.append(f"<ul>{items}</ul>")
            list_buf = []

    for idx, line in enumerate(lines):
        s = line.strip()
        if not s:
            # Peek ahead to find the next non-blank line
            j = idx + 1
            while j < len(lines) and lines[j].strip() == "":
                j += 1
            nxt = lines[j].strip() if j < len(lines) else ""
            # Soft blank if we are mid-paragraph without sentence-ending punctuation and next isn't a heading/bullet
            if para_buf and nxt and not _looks_like_heading(nxt) and not _is_bullet(nxt):
                prev_join = para_buf[-1]
                if not re.search(r"[\.!?][\)\"]*\s*$", prev_join):
                    continue  # soft wrap -> do not break paragraph
            # Otherwise treat as hard paragraph break
            flush_para()
            flush_list()
            continue
        if _is_bullet(s):
            flush_para()
            list_buf.append(_clean_bullet_text(s))
            continue
        if _looks_like_heading(s):
            flush_para()
            flush_list()
            title = s.rstrip(':').strip()
            out.append(f"<h2>{html.escape(title)}</h2>")
            continue
        # Default: part of paragraph
        para_buf.append(s)

    flush_para()
    flush_list()
    return "\n\n".join(out)


def build_meta_description(txt: str, fallback: str) -> str:
    # Use first non-empty 200 chars from preprocessed text
    t = _preprocess_pdf_text(txt)
    t = ' '.join(t.split())
    if not t:
        return fallback
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

