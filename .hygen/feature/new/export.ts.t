---
to: <%= export_path %>/index.ts
unless_exists: true
---
export { <%= component_name %> } from "./components/<%= upper_component_name %>"
