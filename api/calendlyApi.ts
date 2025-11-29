declare global {
  interface Window {
    Calendly?: {
      initPopupWidget?: (options: { url: string }) => void;
    };
  }
}

export const initCalendlyPopup = (url: string): void => {
  if (window.Calendly?.initPopupWidget) {
    window.Calendly.initPopupWidget({ url });
  } else {
    alert(
      "You're currently offline. Please check your internet and try again."
    );
  }
};
