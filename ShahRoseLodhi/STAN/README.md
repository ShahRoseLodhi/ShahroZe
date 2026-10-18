# Nilly — Creator Storefront

A responsive, Next.js storefront inspired by the public Nilly creator-store page. It features an editorial-style profile hero, program cards, resource links, and social/contact links. The starter content uses the public program labels and destinations; replace it with your own branding, images, copy, and URLs before publishing.

## Run locally

1. Install Node.js 20.9 or newer.
2. From the project root, install dependencies with `npm install`.
3. Start the development server with `npm run dev` and open `http://localhost:3000`.
4. Check the production build with `npm run build`.

## Deploy to Vercel

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. In Vercel, create a new project and import the repository.
3. Keep the detected Next.js framework and default build settings, then deploy. No environment variables are required for the starter.
4. For future updates, push commits to the connected repository; Vercel will build and deploy them.

You can also import the repository from the Vercel dashboard and follow its Next.js deployment prompts. The site is compatible with Vercel's standard Next.js runtime.

## Customize

- Edit program and resource data in `src/app/page.tsx`.
- Update page title and description in `src/app/layout.tsx`.
- Adjust colors, typography, layout, and breakpoints in `src/app/globals.css`.
- Product/profile images currently reference the public source storefront; replace with assets you own or have permission to use.

External program and affiliate URLs are provided as sample destinations from the public reference. Update or remove any links you do not own before launch. This site does not process payments; connect your own checkout provider if needed.
