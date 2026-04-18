import { useEffect, useRef } from "react";

/**
 * Adds an IntersectionObserver-based reveal animation.
 * Apply the returned ref to an element with the `reveal` class.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    // Observe the root and any descendant marked .reveal
    const targets = el.querySelectorAll<HTMLElement>(".reveal");
    targets.forEach((t) => observer.observe(t));
    if (el.classList.contains("reveal")) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
