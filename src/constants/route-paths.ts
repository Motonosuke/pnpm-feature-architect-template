type RoutePaths = {
  [key in string as Uppercase<key>]:
    | `/${string}`
    | { [key in string as Uppercase<key>]: `/${string}` }
    | `https://${string}`;
};

export const ROUTE_PATHS = {
  HOME: '/',
  LOGIN: '/login',
  SETTING: {
    ACCOUNT: '/setting/account',
    EMAIL: '/setting/email',
  },
} as const satisfies RoutePaths;
