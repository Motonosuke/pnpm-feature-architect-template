---
to: <%= page_component_path %>/Page.tsx
unless_exists: true
---
import { FC } from 'react';

export const <%= upper_page_component_name %>Page: FC = () => {
  return (
    <div>
      <h1><%= upper_page_component_name %></h1>
    </div>
  );
};
