import useSwr, { useSWRConfig } from "swr";
import type {
  KeyedMutator,
  SWRConfiguration,
  ScopedMutator,
} from "swr/_internal";

type QueryResponse<Data, Error> = {
  data: Data | undefined;
  error: Error | undefined;
  mutate: KeyedMutator<Data>;
};

export const useQuery = <Data, Error>(
  key: string | null,
  fetcher: () => Promise<Data>,
  option?: SWRConfiguration<Data, Error>,
): QueryResponse<Data, Error> => {
  const { data, error, mutate } = useSwr(
    key,
    async () => {
      return await fetcher();
    },
    option,
  );

  return {
    data,
    error,
    mutate,
  };
};

type RefetchMutateQueryResponse = {
  refetchMutate: ScopedMutator;
};

export const useRefetchMutateQuery = (): RefetchMutateQueryResponse => {
  const { mutate: refetchMutate } = useSWRConfig();

  return {
    refetchMutate,
  };
};
