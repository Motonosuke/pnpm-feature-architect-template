---
to: "<%= have_api ? `${api_path}/index.ts` : null %>"
unless_exists: true
---
/**
 * @package
 */
export { <%= api_category %> } from './<%= api_category %>';
