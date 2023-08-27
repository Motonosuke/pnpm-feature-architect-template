---
to: <%= component_path %>/index.ts
unless_exists: true
---
export { <%= upper_component_name %> } from './<%= upper_component_name %>';
