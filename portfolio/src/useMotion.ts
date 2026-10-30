import { useEffect } from "react";

/** Progressive enhancement: content stays readable if motion isn't available. */
export function useMotion(disabled: boolean) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    root.classList.toggle("motion-paused", disabled);
    const sections = [
      ...document.querySelectorAll<HTMLElement>("main section[id]"),
    ];
    const targets = [
      ...document.querySelectorAll<HTMLElement>(
        ".section-head, .about-grid, .research-card, .project, .timeline article, .simulation-grid article, .skills-grid article, .education, .certifications article, .contact h2",
      ),
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );
    if (!disabled && !reduced.matches)
      targets.forEach((target, i) => {
        target.style.setProperty("--reveal-delay", `${(i % 3) * 60}ms`);
        // Never hide content already visible on load.
        if (target.getBoundingClientRect().top > window.innerHeight) {
          target.classList.add("will-reveal");
          observer.observe(target);
        }
      });
    let frame = 0;
    const update = () => {
      const scrollable = root.scrollHeight - window.innerHeight;
      root.style.setProperty(
        "--reading-progress",
        `${scrollable > 0 ? window.scrollY / scrollable : 0}`,
      );
      root.classList.toggle("has-scrolled", window.scrollY > 24);
      let active = "";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.45)
          active = section.id;
      });
      document
        .querySelectorAll<HTMLAnchorElement>("nav a[href^='#']")
        .forEach((link) => {
          if (link.hash === `#${active}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onPointer = (event: PointerEvent) => {
      if (disabled || reduced.matches || event.pointerType !== "mouse") return;
      const art = document.querySelector<HTMLElement>(".hero-art");
      if (!art) return;
      const rect = art.getBoundingClientRect();
      if (rect.bottom < 0) return;
      const x = Math.max(
        -1,
        Math.min(
          1,
          (event.clientX - (rect.left + rect.width / 2)) / rect.width,
        ),
      );
      const y = Math.max(
        -1,
        Math.min(
          1,
          (event.clientY - (rect.top + rect.height / 2)) / rect.height,
        ),
      );
      art.style.setProperty("--pointer-x", `${x * 9}deg`);
      art.style.setProperty("--pointer-y", `${-y * 7}deg`);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointer);
      targets.forEach((target) =>
        target.classList.remove("will-reveal", "is-visible"),
      );
    };
  }, [disabled]);
}
