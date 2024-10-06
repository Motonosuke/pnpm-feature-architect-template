type ImagePaths = {
  [Key in string as Uppercase<Key>]: `/${string}`;
};

export const IMAGE_PATHS = {
  SAMPLE: "/images/sample.png",
} as const satisfies ImagePaths;
