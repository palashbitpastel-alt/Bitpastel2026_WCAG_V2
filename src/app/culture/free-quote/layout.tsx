import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// WCAG 2.4.2 Page Titled: the Free Quote URL gets its own title instead of
// repeating the title of the page shown behind the modal.
export const metadata: Metadata = {
  title: 'Get a Free Quote - Bitpastel',
};

export default function FreeQuoteLayout({ children }: { children: ReactNode }) {
  return children;
}
