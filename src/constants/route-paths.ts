type RoutePaths = {
  [Key in string as Uppercase<Key>]:
    | `/${string}`
    | { [Key in string as Uppercase<Key>]: `/${string}` }
    | `https://${string}`;
};

export const ROUTE_PATHS = {
  HOME: "/",
  LOGIN: "/login",
  SETTING: {
    ACCOUNT: "/setting/account",
    EMAIL: "/setting/email",
  },
} as const satisfies RoutePaths;
