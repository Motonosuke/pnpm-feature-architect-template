type CacheKeys = {
  [Key in string as Uppercase<Key>]:
    | `/${string}`
    | { [Key in string as Uppercase<Key>]: `${string}` };
};

export const CACHE_KEYS = {
  POSTS: {
    GET_POSTS: "GET_POSTS",
  },
  ALBUMS: {
    GET_ALBUMS: "GET_ALBUMS",
  },
} as const satisfies CacheKeys;
