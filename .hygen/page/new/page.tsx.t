---
to: <%= page_path %>/index.tsx
unless_exists: true
---
import { CustomNextPage, GetServerSideProps } from 'next';

import { MainLayout } from '@/components/Layouts';
import { <%= upper_page_name %>Page } from '@/page-components/<%= page_name %>';

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
  return <<%= upper_page_name %>Page {...props} />;
};

<%= upper_page_name %>.getLayout = MainLayout;
export default <%= upper_page_name %>;
