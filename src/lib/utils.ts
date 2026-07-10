type ClassValue = false | null | string | undefined;

export function cn(...classes: readonly ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

export function isExternalUrl(url: string): boolean {
  return /^https?:\/\//u.test(url);
}
