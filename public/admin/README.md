Place `site.content.json` in `public/admin/` to override site-level values without code.

Fields supported:
- `siteName` (string)
- `title` (string)
- `description` (string)
- `social` (object: `linkedin`, `github`, `medium`, `email`)
- `resume` (string, URL path)
- `portrait` (string, URL path to public image)

The site will load this file at runtime (client-side) and fall back to `site.config.js` when keys are missing.

Example: `site.content.json` (see included sample)
