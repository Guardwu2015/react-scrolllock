export function preventTouchMove(e) {
  e.preventDefault();
}

export function allowTouchMove(e) {
  e.stopPropagation();
}

export function preventInertiaScroll() {
  const top = this.scrollTop;
  const totalScroll = this.scrollHeight;
  const currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
export function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

export function getPadding() {
  const currentPadding = parseInt(document.body.paddingRight, 10) || 0;
  const clientWidth = document.body ? document.body.clientWidth : 0;
  const adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;

  return adjustedPadding;
}

export function camelToKebab(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

export function parse(val: number | string): string {
  return isNaN(val) ? val : `${val}px`;
}
