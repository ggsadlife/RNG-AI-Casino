import pathlib
import re
import urllib.request

ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
url = "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Geist+Mono:wght@500;600&display=swap"
out = pathlib.Path("assets/fonts")
out.mkdir(parents=True, exist_ok=True)
req = urllib.request.Request(url, headers={"User-Agent": ua})
css = urllib.request.urlopen(req, timeout=30).read().decode()
css_out = []
seen = set()
for block in re.findall(r"@font-face\s*\{.*?\}", css, re.S):
    fam = re.search(r"font-family:\s*'([^']+)'", block)
    weight = re.search(r"font-weight:\s*(\d+)", block)
    src = re.search(r"src:\s*url\(([^)]+)\)", block)
    if not (fam and weight and src):
        continue
    key = (fam.group(1), weight.group(1))
    if key in seen:
        continue
    seen.add(key)
    name = f"{fam.group(1).replace(' ', '-').lower()}-{weight.group(1)}.woff2"
    dest = out / name
    urllib.request.urlretrieve(src.group(1).strip("\"'"), dest)
    css_out.append(
        "@font-face{font-family:'%s';font-style:normal;font-weight:%s;font-display:swap;src:url('assets/fonts/%s') format('woff2');}"
        % (fam.group(1), weight.group(1), name)
    )
    print("saved", name, dest.stat().st_size)
(out / "fonts.css").write_text("\n".join(css_out), encoding="utf-8")
print("faces", len(css_out))
