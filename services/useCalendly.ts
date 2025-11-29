import { initCalendlyPopup } from "@/api/calendlyApi";

const demoUrl = "https://calendly.com/toluwaseogunde/rootscards-30-minute-demo";

export const scheduleDemo = (): void => {
  initCalendlyPopup(demoUrl);
};
