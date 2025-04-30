/**
 * Smoothly scrolls to the top of the page
 * @param options Optional ScrollToOptions
 */
export function scrollToTop(options: ScrollToOptions = { behavior: 'smooth' }) {
  window.scrollTo({
    top: 0,
    left: 0,
    ...options
  });
}

/**
 * Checks if an element is fully in viewport
 * @param element HTML element to check
 * @returns boolean
 */
export function isElementInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Ensures header visibility after scroll
 */
export function ensureHeaderVisibility() {
  const header = document.querySelector('header');
  if (header && !isElementInViewport(header as HTMLElement)) {
    scrollToTop();
  }
}