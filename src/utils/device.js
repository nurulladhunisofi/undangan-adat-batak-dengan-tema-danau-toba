export function isMobile() {
  return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export function isTablet() {
  return window.innerWidth > 768 && window.innerWidth <= 1024;
}

export function isReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function getDeviceTier() {
  if (isReducedMotion()) return 'LOW';
  if (isMobile()) return 'LOW';
  if (isTablet()) return 'MEDIUM';
  return 'HIGH';
}
