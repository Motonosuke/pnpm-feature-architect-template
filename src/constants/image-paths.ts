type ImagePaths = {
  [key in string as Uppercase<key>]: `/${string}`;
};

export const IMAGE_PATHS = {
  SAMPLE: '/images/sample.png',
} as const satisfies ImagePaths;
