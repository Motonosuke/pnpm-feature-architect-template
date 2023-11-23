type CookieKeys = {
  [key in string as Uppercase<key>]: string;
};

export const COOKIE_KEYS = {
  HOGE_ID: 'hoge_id',
} as const satisfies CookieKeys;
