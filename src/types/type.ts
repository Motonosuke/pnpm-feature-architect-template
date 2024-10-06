import type { KeyedMutator } from "swr/_internal";

import type { ApiError } from "@/utils/api-error";

export type QueryReturnType<Data, ErrorData = undefined> = {
  data: Data | undefined;
  error: ApiError<ErrorData> | undefined;
  mutate: KeyedMutator<Data>;
};
