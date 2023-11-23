type BackendEndpoints = {
  [key in string as Uppercase<key>]:
    | `/${string}`
    | { [key in string as Uppercase<key>]: `/${string}` }
    | `https://${string}`
    | { [key in string as Uppercase<key>]: `https://${string}` };
};

export const BACKEND_ENDPOINTS = {
  HOGE: '/hoge',
  JSON_PLACEHOLDER: {
    ALBUMS: 'https://jsonplaceholder.typicode.com/albums',
    POSTS: 'https://jsonplaceholder.typicode.com/posts',
  },
} as const satisfies BackendEndpoints;
