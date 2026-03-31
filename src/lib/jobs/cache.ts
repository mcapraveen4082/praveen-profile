type CacheEntry<T> = {
  expiresAt: number;
  data: T;
};

const memoryCache = new Map<string, CacheEntry<unknown>>();

export async function withTTLCache<T>(key: string, ttlMs: number, loader: () => Promise<T>): Promise<T> {
  const now = Date.now();
  const existing = memoryCache.get(key) as CacheEntry<T> | undefined;

  if (existing && existing.expiresAt > now) {
    return existing.data;
  }

  const data = await loader();
  // Don't cache empty arrays; job providers often return 0 temporarily for narrow queries,
  // and caching "no results" makes subsequent keyword changes look broken.
  if (!(Array.isArray(data) && data.length === 0)) {
    memoryCache.set(key, { expiresAt: now + ttlMs, data });
  }
  return data;
}

