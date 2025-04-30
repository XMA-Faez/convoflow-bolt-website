export {};

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (config: { url: string; prefill?: Record<string, any> }) => void;
      initInlineWidget: (config: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}