type Env = {
  [Key in string as Uppercase<Key>]: string;
};

export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL as string,
} as const satisfies Env;
