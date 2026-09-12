# Osman Academy — unified local preview

Docusaurus site combining the academy pages, four AI program pages, and four draft e-books. This project is separate from both source sites. No GitHub push or deployment has been performed.

## Run locally

Requires Node.js 20 or later. Install with `npm ci`, then run `npm start -- --host 127.0.0.1`. For a production preview, run `npm run build`, then `npm run serve -- --host 127.0.0.1`.

## Editing

- `src/pages`: Docusaurus landing, library, blog, and program routes.
- `src/data`: migrated academy page content. HTML is trusted local content, stripped of source scripts and event handlers during migration.
- `src/components/AcademyPage.js`: shared page layout and responsive section navigation.
- `src/css/custom.css`: original brand and scoped page styles.
- `src/css/unified.css`: shared navigation, responsive layout, library, and sidebar styles.
- `book-fundamentals`, `book-associate`, `book-developer`, `book-architect`: original Markdown chapters, served below `/books`.
- `static/assets`: original website images.
- `migration-report.json`: source locations, editorial changes, and legacy URL mappings.

The native Docusaurus blog has an intentional empty state. Add dated Markdown articles under `blog/`; the blog will automatically show the article list.

E-books are drafts. Udemy enrollment is disabled until actual course links are available. No payment or account features are implemented.

Legacy `.html` pages use local redirects. Redirects from `books.osmanacademy.ai` require configuration at that domain when deployment is separately approved; preserve chapter suffixes while prefixing `/books`.

