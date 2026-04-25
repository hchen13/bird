export function extractListId(input: string): string | null {
  const trimmed = input.trim();
  if (/^\d+$/.test(trimmed)) return trimmed;
  const match = trimmed.match(/(?:x|twitter)\.com\/i\/lists\/(\d+)/i);
  return match?.[1] ?? null;
}
