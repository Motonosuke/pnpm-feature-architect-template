---
to: "<%= have_api ? `${hooks_path}/index.ts` : null %>"
unless_exists: true
---
/**
 * @package
 */
export { useFetch } from './useFetch';
