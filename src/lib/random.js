export function pickRandomIndex(length, excludeIndex = -1) {
  if (!Number.isFinite(length) || length <= 0) return -1;
  if (length === 1) return 0;

  let idx = Math.floor(Math.random() * length);
  while (idx === excludeIndex) {
    idx = Math.floor(Math.random() * length);
  }
  return idx;
}
