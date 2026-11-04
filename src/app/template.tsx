'use client';

import { MotionConfig } from 'framer-motion';
import { useEffect, type ReactNode } from 'react';

// No entrance animation on the page wrapper: whatever the server renders as
// the starting state (opacity:0 or a translateY offset) is what visitors and
// WCAG checkers see before JS hydrates — invisible content or a white gap at
// the top of the page. Content now renders in its final position immediately.
export default function Template({ children }: { children: ReactNode }) {
  // Home-page-only showcase: links are neutralised to href="#". Cancel those clicks
  // so they do nothing at all (no jump to the top of the page, no new tab).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href="#"]');
      if (link) e.preventDefault();
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  // Remember whether the user is navigating by keyboard (Tab) or pointer, so text
  // fields can hide the focus ring after a mouse click. Browsers always match
  // :focus-visible on text inputs, even when clicked; WCAG 2.4.7 only needs the
  // ring for keyboard focus, which still shows it.
  useEffect(() => {
    const root = document.documentElement;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab') root.dataset.inputModality = 'keyboard';
    };
    const onPointer = () => {
      root.dataset.inputModality = 'pointer';
    };
    document.addEventListener('keydown', onKey, true);
    document.addEventListener('pointerdown', onPointer, true);
    return () => {
      document.removeEventListener('keydown', onKey, true);
      document.removeEventListener('pointerdown', onPointer, true);
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
