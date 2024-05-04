export function isPageLoaded(): boolean {
  if (document.readyState === "complete") {
    return true;
  } else {
    return false;
  }
}
