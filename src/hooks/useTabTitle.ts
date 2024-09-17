import { useEffect } from 'react';

export function useTabTitle (pageTitle: string) {
  useEffect(() => {
    const fullTitle = `Reservi | ${pageTitle}`;
    document.title = fullTitle;
  }, [pageTitle]);
}