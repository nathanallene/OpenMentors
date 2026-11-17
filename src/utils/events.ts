export const PREFILL_CONTACT_EVENT = "foraimentors:prefill-contact";
export const SELECT_SERVICE_EVENT = "foraimentors:select-service";

export const prefillContact = (detail: {
  message?: string;
  topic?: string;
}) => {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(PREFILL_CONTACT_EVENT, { detail }));
};
