import { useCallback } from 'react';

export const throttle = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;

  return (...args: any[]) => {
    const currentTime = Date.now();
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

// WCAG 2.4.3 Focus Order: after an in-page jump, move keyboard focus to the
// section heading so the next Tab continues inside that section instead of
// going back to the header/footer control that triggered the scroll.
export const focusSectionHeading = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (!section) return;
  const heading = section.querySelector<HTMLElement>('h2') ?? section;
  if (!heading.hasAttribute('tabindex')) heading.setAttribute('tabindex', '-1');
  heading.focus({ preventScroll: true });
};

export const scrollToSection = (sectionId: string, offset = 40) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    window.history.pushState(null, '', `#${sectionId}`);
    focusSectionHeading(sectionId);
  }
};