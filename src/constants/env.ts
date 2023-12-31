type Env = {
  [key in string as Uppercase<key>]: string;
};

export const ENV = {
  API_URL: process.env.NEXT_PUBLIC_API_URL as string,
} as const satisfies Env;
