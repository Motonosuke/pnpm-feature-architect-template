---
to: "<%= have_api ? `${api_path}/${api_category}.ts` : null %>"
---
import { axios } from '@/libs/axios';

export const <%= api_category %> = async (): Promise<any> => {
  const path = 'hoge'
  const { data } = await axios.<%= api_category %><any>(path);
  return data;
  // return PostsEntity.new(data);
};
