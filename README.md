# Wen Qi — personal academic website

A plain static site: three HTML pages, one stylesheet, one small script. No build step, no framework.

```
index.html      About, research interests, news, education, contact
research.html   Dissertation, publications, under review, working papers, grants, talks
teaching.html   Courses taught, TA roles, service
cv.pdf          Your CV (replace with the latest version whenever it changes)
styles.css      All styling; light theme by default, dark theme via the toggle
script.js       Theme toggle, copy-email button, nav highlighting
images/         Headshot.png is the portrait shown on the home page (replace the file, keep the name)
```

## Editing

- Open any `.html` file in a text editor and change the words. Each paper on `research.html` is one `<li class="paper">` block; copy one to add another.
- To change the photo: replace `images/Headshot.png` with a new file of the same name (portrait orientation; 480×600 px or larger looks sharpest on Retina screens).
- Google Scholar, LinkedIn, and GitHub icons sit at the top right of every page, inside the `<span class="social">` block near the top of each `.html` file. Paste your URLs into the `href` of the Scholar and LinkedIn links (all three pages).
- Update "Last updated" in each page's footer when you make changes.

## Preview locally

From this folder:

```bash
python3 -m http.server 8766
```

Then open http://localhost:8766 in a browser.

## Publish on GitHub Pages (free, standard for academic sites)

1. Create a new public repository on GitHub named exactly `<your-username>.github.io` (for example `wendyqqqqi.github.io`).
2. In this folder, run:

```bash
git init && git add . && git commit -m "Personal website"
```

```bash
git branch -M main && git remote add origin https://github.com/<your-username>/<your-username>.github.io.git && git push -u origin main
```

3. On GitHub, open the repository → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`. The site goes live at `https://<your-username>.github.io` within a minute or two.
4. Optional custom domain (e.g. `wenqi.org`): buy the domain, add a file named `CNAME` containing the domain, and point the domain's DNS at GitHub Pages as described in the Pages settings.

## Alternative: Cloudflare Pages

You already use Wrangler for SmartCook, so this also works:

```bash
wrangler pages deploy . --project-name=wenqi-site --branch=main --commit-dirty=true
```
