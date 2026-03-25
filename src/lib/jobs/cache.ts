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
  memoryCache.set(key, { expiresAt: now + ttlMs, data });
  return data;
}

