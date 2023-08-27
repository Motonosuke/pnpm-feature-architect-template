---
to: <%= component_path %>/<%= upper_component_name %>.tsx
unless_exists: true
---
import { FC } from 'react';

export const <%= upper_component_name %>: FC = () => {
  return (
    <div>
      <h1><%= upper_component_name %></h1>
    </div>
  );
};
