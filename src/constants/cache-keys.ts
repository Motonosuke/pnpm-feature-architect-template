type CacheKeys = {
  [key in string as Uppercase<key>]: `/${string}` | { [key in string as Uppercase<key>]: `${string}` };
};

export const CACHE_KEYS = {
  POSTS: {
    GET_POSTS: 'GET_POSTS',
  },
  ALBUMS: {
    GET_ALBUMS: 'GET_ALBUMS',
  },
} as const satisfies CacheKeys;
