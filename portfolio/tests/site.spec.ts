import { test, expect } from "@playwright/test";
test("root deployment serves built assets, metadata and static 404", async ({ page, request }) => {
  const response = await request.get("/");
  expect(response.ok()).toBeTruthy();
  const html = await response.text();
  expect(html).not.toContain("/Trackml-reconstruction/");
  expect(html).toContain('href="https://sheethaleenuganti.github.io/"');
  const assets = [...html.matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g)].map(match => match[1]);
  expect(assets.length).toBeGreaterThanOrEqual(2);
  for (const asset of [...assets, "/assets/social-preview.png", "/assets/resume.pdf", "/favicon.svg", "/404.html"]) {
    expect((await request.get(asset)).ok(), asset).toBeTruthy();
  }
  await page.goto("/404.html");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("A different path.");
  await page.getByRole("link", { name: "Back to the portfolio" }).click();
  expect(new URL(page.url()).pathname).toBe("/");
});
test("motion controls, reveals and reading navigation", async ({ page }) => {
  await page.goto("./");
  const motion = page.getByRole("button", { name: "Pause decorative motion" });
  await motion.click();
  await expect(page.locator("html")).toHaveClass(/motion-paused/);
  await expect(
    page.getByRole("button", { name: "Enable decorative motion" }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: "Enable decorative motion" }).click();
  await expect(page.locator("html")).not.toHaveClass(/motion-paused/);
  await page.locator("#projects .project").first().scrollIntoViewIfNeeded();
  await expect(page.locator("#projects .project").first()).toHaveClass(
    /is-visible/,
  );
  await expect(page.locator('nav a[href="#projects"]')).toHaveAttribute(
    "aria-current",
    "location",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".motion-control")).toBeHidden();
  await expect(page.locator("#contact h2")).toHaveCSS("opacity", "1");
});
test("navigation, case studies, local links and privacy", async ({
  page,
  request,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("./");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "intelligent systems.",
  );
  if (testInfo.project.name === "mobile")
    await page.getByRole("button", { name: "Menu", exact: true }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Projects", exact: true })
    .click();
  await expect(page).toHaveURL(/#projects$/);
  const study = page.locator("details").first();
  await study.locator("summary").click();
  await expect(study).toHaveAttribute("open", "");
  await expect(study.getByText(/25.19/)).toBeVisible();
  await study.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(study).not.toHaveAttribute("open", "");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBeTruthy();
  const anchors = await page
    .locator('a[href^="#"]')
    .evaluateAll((xs) => xs.map((x) => x.getAttribute("href")!));
  for (const hash of anchors.filter((x) => x !== "#"))
    expect(await page.locator(hash).count()).toBe(1);
  expect(await page.locator("body").innerText()).not.toContain("9885425182");
  const pdf = await request.get("assets/resume.pdf");
  expect(pdf.ok()).toBeTruthy();
  expect((await pdf.body()).subarray(0, 4).toString()).toBe("%PDF");
  expect((await request.get("favicon.svg")).ok()).toBeTruthy();
  expect(errors).toEqual([]);
  await page.goto("./");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.screenshot({
    path: `test-results/${testInfo.project.name}-preview.png`,
    fullPage: true,
    animations: "disabled",
  });
  await page.screenshot({
    path: `test-results/${testInfo.project.name}-hero.png`,
    animations: "disabled",
  });
  for (const width of [320, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBeTruthy();
  }
});
test("404 offers a working home link", async ({ page }) => {
  await page.goto("missing-page");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "A different path.",
  );
  await page.getByRole("link", { name: "Back to the portfolio" }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "intelligent systems.",
  );
});
