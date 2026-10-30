# Sheethal Enuganti — portfolio

React + TypeScript + Vite, prepared for https://sheethaleenuganti.github.io/ with production base `/`. Approved design, animation, typography and functionality are unchanged.

## Repository verification and local layout

GitHub was checked on 30 October 2026. `Sheethaleenuganti/Sheethaleenuganti.github.io` (ID 1440027413) and `Sheethaleenuganti/Trackml-reconstruction` (ID 1409675212) are separate repositories. The research checkout still points to TrackML; it was not renamed. A separate website checkout was cloned at:

`C:\Users\Sheethal\OneDrive\Documents\ChatGPT\Sheethaleenuganti.github.io`

Only the portfolio and its workflow were copied there. The existing repository README and Git history are preserved. Do not push the research checkout to the website remote or force-push.

Pages currently uses branch publishing (`main`, `/`, build type `legacy`), HTTPS is enforced, and Actions is enabled with all actions allowed. Live settings were read only, not changed. Nothing has been committed, pushed or deployed by this preparation.

## Local preview and checks

From the website checkout:

```powershell
cd portfolio
npm ci
npm run build
npx playwright install chromium
npm run test:e2e
npm run preview -- --port 4173
```

Preview: http://127.0.0.1:4173/. Development: `npm run dev` at http://127.0.0.1:5173/. Use Node 22.12+.

Tests cover desktop/mobile navigation, keyboard case studies, 320/768/1440px overflow, internal anchors, PDF/icon delivery, runtime errors, motion control, reduced motion, scroll reveals, active navigation, domain-root asset paths, canonical URL, social preview and the generated static 404 recovery page.

## Publish only after final approval

Pushing the workflow to `main` enables automatic deployment. Complete these steps only after approval:

1. Open the website repository's **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**. Do this before pushing. No custom domain is needed for the intended github.io address.
2. In PowerShell, run:

```powershell
Set-Location 'C:\Users\Sheethal\OneDrive\Documents\ChatGPT\Sheethaleenuganti.github.io'
git remote -v
git branch --show-current
git pull --ff-only origin main
git add -- portfolio .github/workflows/portfolio-pages.yml
git diff --cached --stat
git status --short
git commit -m "Prepare approved portfolio for personal GitHub Pages"
git push origin main
```

Verify `origin` is `https://github.com/Sheethaleenuganti/Sheethaleenuganti.github.io.git` and the branch is `main` before continuing. Review the staged files. If pulling reports a conflict, stop and resolve it without force-pushing.

3. Open **Actions → Deploy portfolio to GitHub Pages** and monitor the automatically started run. The build job installs locked dependencies, type-checks/builds, installs Chromium with Linux dependencies, runs all browser tests, configures Pages and uploads only `portfolio/dist`.
4. The dependent deploy job publishes to the `github-pages` environment. Allow `main` in that environment's deployment branch rules if GitHub requests it; approve any existing required-reviewer gate.
5. Visit https://sheethaleenuganti.github.io/. Check the résumé, mobile menu and a missing URL. Future pushes changing `portfolio/**` or the workflow on `main` redeploy automatically. Pull requests run checks without deploying; manual runs on `main` are also supported.

The build job receives `contents: read` and `pages: read`; only the deploy job receives `pages: write` and `id-token: write`. Deployment requires a successful build/test job and a `main` ref. A repository-name guard prevents this workflow from deploying out of the research repository. No personal access token or custom secret is required.

See [GitHub's workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) for Pages artifact, environment and permission requirements.

## Content and asset editing

- `src/content.ts`: projects, metrics, case studies, leadership, skills, certifications and contact links.
- `src/main.tsx`: hero, about, research, education and simulations.
- `src/style.css` and `src/useMotion.ts`: approved styling and motion.
- `public/assets/resume.pdf`: phone-redacted résumé. Replace with a reviewed phone-free PDF.
- `public/assets/social-preview.png`, `public/favicon.svg`, `index.html`: social image, icon and SEO metadata.

Assets and résumé use Vite's root base. Hash navigation needs no router. The build generates `404.html` with root-absolute asset references so missing nested URLs still render the recovery page. `.nojekyll` is generated. Google Fonts have local system fallbacks.

The TrackML project source link intentionally still points to its verified research repository; it is not a deployment path. The newer PDF remains the primary source where the master CV differs. Trajectory artwork is illustrative. No claims or project metrics were changed.
