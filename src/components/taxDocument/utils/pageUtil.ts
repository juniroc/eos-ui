export function getFormCount(
  otherCardItemLength: number,
  form1Length: number,
  form2Length: number
): number {
  const len = Math.max(0, Math.floor(otherCardItemLength));

  const remaining = len - form1Length;
  if (remaining <= 0) return 0;

  return Math.ceil(remaining / form2Length);
}
