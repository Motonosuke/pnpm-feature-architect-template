type CookieKeys = {
  [Key in string as Uppercase<Key>]: string;
};

export const COOKIE_KEYS = {
  HOGE_ID: "hoge_id",
} as const satisfies CookieKeys;
