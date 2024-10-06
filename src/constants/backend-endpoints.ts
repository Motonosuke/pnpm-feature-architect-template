type BackendEndpoints = {
  [Key in string as Uppercase<Key>]:
    | `/${string}`
    | { [Key in string as Uppercase<Key>]: `/${string}` }
    | `https://${string}`
    | { [Key in string as Uppercase<Key>]: `https://${string}` };
};

export const BACKEND_ENDPOINTS = {
  HOGE: "/hoge",
  JSON_PLACEHOLDER: {
    ALBUMS: "https://jsonplaceholder.typicode.com/albums",
    POSTS: "https://jsonplaceholder.typicode.com/posts",
  },
} as const satisfies BackendEndpoints;
