---
to: "<%= have_api ? `${hooks_path}/useFetch.ts` : null %>"
unless_exists: true
---
import useSWR from 'swr';

import { <%= api_category %> } from "@/features/<%= feature_name %>/apis";

/**
 * @package
 */
export const useFetch = () => {
  const key = 'hoge'
  return useSWR(key, () => <%= api_category %>(), {
    suspense: false,
  });
};
