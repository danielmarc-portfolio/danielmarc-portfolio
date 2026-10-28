/**
 * Resolves a local public asset path (such as '/assets/...') against Vite's configured
 * import.meta.env.BASE_URL (e.g. '/danielmarc-portfolio/' on GitHub Pages or '/' in local dev).
 *
 * This helper is idempotent: calling it multiple times on an already-resolved path
 * will never prepend the base path twice.
 */
export function resolveAssetUrl(path: string | undefined | null): string {
  if (!path) return '';

  const trimmed = path.trim();
  if (!trimmed || /^(https?:|data:|blob:)/i.test(trimmed)) {
    return trimmed;
  }

  const rawBase = import.meta.env?.BASE_URL || '/';
  const normalizedBase =
    rawBase === '/' || rawBase === './' || rawBase === '.'
      ? ''
      : `/${rawBase.replace(/^\/+|\/+$/g, '')}`;

  let cleanPath = trimmed;

  // Strip any existing base prefix so we never double-prefix
  if (normalizedBase) {
    while (cleanPath.startsWith(`${normalizedBase}/`)) {
      cleanPath = cleanPath.slice(normalizedBase.length);
    }
  }

  // Ensure a single leading slash for root-relative asset paths
  if (cleanPath.startsWith('./')) {
    cleanPath = cleanPath.slice(1);
  } else if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }

  return `${normalizedBase}${cleanPath}`;
}
