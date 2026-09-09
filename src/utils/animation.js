export function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

export function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

export function smoothstep(min, max, value) {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

export function mapRange(value, inMin, inMax, outMin, outMax) {
  return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin);
}
