---
to: <%= page_component_path %>/index.ts
unless_exists: true
---
export { <%= upper_page_component_name %>Page } from './Page';
