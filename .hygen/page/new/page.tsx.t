---
to: <%= page_path %>/index.tsx
unless_exists: true
---
import { CustomNextPage, GetServerSideProps } from 'next';

import { MainLayout } from '@/components/Layouts';

<% if (is_ssr) { %>
export const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  return {
    props: {
      query,
      req
    },
  };
};
<%}%>

const <%= upper_page_name %>: CustomNextPage = (props) => {
  return <%= upper_page_name_main %>
};

<%= upper_page_name %>.getLayout = MainLayout;
export default <%= upper_page_name %>;
