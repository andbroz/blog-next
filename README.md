<p align="center">
  <a href="https://www.nextjs.org">
    <img
      src="./.github/banner.png"
      alt="Next.js"
    />
  </a>
</p>
<h1 align="center">
  Next.js Blog Starter
</h1>

[![Author](https://img.shields.io/badge/author-sabertaz-lightgrey?style=for-the-badge)](https://github.com/sabertazimi)
[![LICENSE](https://img.shields.io/github/license/sabertazimi/blog?style=for-the-badge)](https://github.com/sabertazimi/blog/blob/main/LICENSE)

[![Code Lines](https://img.shields.io/tokei/lines/github/sabertazimi/blog?style=for-the-badge&logo=visualstudiocode)](https://github.com/sabertazimi/blog)
[![Top Language](https://img.shields.io/github/languages/top/sabertazimi/blog?logo=typescript&style=for-the-badge)](https://github.com/https://github.com/sabertazimi/blog/search?l=typescript)

[![CI](https://img.shields.io/github/workflow/status/sabertazimi/blog/CI/main?style=for-the-badge&logo=github)](https://github.com/sabertazimi/blog/actions/workflows/ci.yml)
[![CodeQL](https://img.shields.io/github/workflow/status/sabertazimi/blog/CodeQL/main?label=CodeQL&logo=github&style=for-the-badge)](https://github.com/sabertazimi/blog/actions/workflows/codeql-analysis.yml)
[![Jest Coverage](https://img.shields.io/codecov/c/github/sabertazimi/blog?logo=codecov&style=for-the-badge)](https://codecov.io/gh/sabertazimi/blog)

A great [blog](https://blog.tazimi.dev) system based on Next.js.

## :sparkles: Features

### Visual Features

- Great landing page.
- Typing effect for landing page title.
- Great fluid of post card.
- Great tags cloud page: separate page for posts under each tag.
- Great GitHub information card.
- Social share buttons.
- Full-featured `MDX` support:
  - Optimized vertical rhythm for headings and paragraphs.
  - Custom almost all `Markdown` built-in components.
  - `GFM` syntax support.
  - `Katex` math support.
  - Admonition container support.
  - Emoji short code support.
  - Image preview card support.
  - Pretty code blocks support:
    - Syntax highlight using `PrismJS`.
    - macOS style code box.
    - Line number support.
    - Lines highlight support.
    - Custom code title support.
    - Quick code copy support.
  - Out of box support for live code editor.
  - Automatically generated sidebar navigation,
    table of contents, previous and next post navigation links.
- Nice animation for page transitions and dynamic routing.
- Motion almost everything.
- Disqus comments system.
- Customized 404 not found page.
- Dark mode support.
- ...and more.

### Development Features

- Lightning fast `HMR`.
- Dynamic route generation for `Markdown` posts.
- Optimized build using `Rust` compiler.
- `TypeScript` static type checking.
- `ESLint`, `StyleLint` and `Prettier` style checking.
- Out of box support for `tailwind.css`.
- Fully customizable styles through `tailwind.css`.
- Mobile-first approach in development.
- Out of box support for `Vercel` deployment.
- Separate components for everything.
- Complete `React` components testing using `Jest` and `Testing Library`.
- E2E visual testing using `Cypress` for `Chrome` and `Firefox`.
- Optimization for `SEO`: meta heading, sitemap and `robots.txt` support.
- Progressive web app (`PWA`): offline support and webapp manifest support.
- ...and more.

## :bookmark_tabs: Post Template

`Yaml` Front + `Markdown` Body:

```markdown
---
layout: post
title: 'React Redux Basic Notes'
subtitle: 'Daily I learned'
author: 'sabertaz'
date: 2022-02-03
tags:
  - Redux
  - React
  - JavaScript
  - Frontend Development
  - Web Development
---

# React Redux Basic Notes

## Introduction

<... more contents>
```

## :rocket: Quick start

### Installation

```bash
git clone --depth=1 https://github.com/sabertazimi/blog
cd blog
npm install
```

### Development

```bash
# http://localhost:3000
npm start
```

**Open the source code and start editing!**

Your site is now running at `http://localhost:3000`!

## :stars: Deployment

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsabertazimi%2Fblog&project-name=blog&repo-name=blog&demo-title=Sabertaz%20Blog&demo-url=https%3A%2F%2Fblog.tazimi.dev)

Build for `/` path:

```bash
# Deploy to Vercel.
npm run build
```

## :open_file_folder: Fold Structure

A quick look at the top-level files and directories you'll see in a Next.js project.

```bash
.
├── node_modules
├── __mocks__
├── components
├── config
├── contents
├── cypress
├── hooks
├── layouts
├── lib
├── pages
├── public
├── styles
├── types
├── .gitignore
├── .tokeignore
├── .eslintrc.json
├── .prettierrc.json
├── .stylelintrc.json
├── .versionrc.json
├── codecov.yml
├── cypress.json
├── jest.config.js
├── jest.setup.js
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── sitemap.config.js
├── tailwind.config.js
├── tsconfig.json
├── LICENSE
└── README.md
```

1. **`/node_modules`**: This directory contains all of the modules of code.
2. **`/__mocks__`**: Mock API for 3rd-party libraries for Jest testing.
3. **`components`**: React components building block.
4. **`config`**: Blog site configuration (color/metadata/etc.).
5. **`contents`**: Blog posts (`.md`/`.mdx`).
6. **`cypress`**: Cypress E2E testing files.
7. **`hooks`**: Hooks for shared logic.
8. **`layouts`**: Layouts components.
9. **`lib`**: Data fetching helper functions.
10. **`pages`**: Pages components (SSG).
11. **`public`**: Static assets.
12. **`styles`**: CSS stylesheets files.
13. **`types`**: TypeScript shared type definition.
14. **`.gitignore`**: This file tells git which files it should not track.
15. **`.tokeignore`**: [Code Lines](https://github.com/XAMPPRocky/tokei) configuration file.
16. **`.eslintrc.json`**: [ESLint](https://eslint.org) configuration file.
17. **`.prettierrc.json`**: [Prettier](https://prettier.io) configuration file.
18. **`.stylelintrc.json`**: [StyleLint](https://stylelint.io) configuration file.
19. **`.versionrc.json`**: [Standard Version](https://github.com/conventional-changelog/standard-version) configuration file.
20. **`codecov.yml`**: [Codecov](https://codecov.io) CI configuration file.
21. **`cypress.json`**: [Cypress](https://cypress.io) E2E testing configuration file.
22. **`jest.config.js`**: [Jest](https://jestjs.io) configuration file.
23. **`jest.setup.js`**: Jest basic setup script (after environment setup).
24. **`next-env.d.ts`**: `Next.js` internal type definition.
25. **`next.config.js`**: `Next.js` configuration file.
26. **`package.json`**: A manifest file for Node.js projects.
27. **`postcss.config.js`**: [PostCSS](https://postcss.org) configuration file.
28. **`sitemap.config.js`**: `next-sitemap` configuration file.
29. **`tailwind.config.js`**: [Tailwind.css](https://tailwindcss.com) configuration file.
30. **`tsconfig.json`**: [TypeScript](https://www.typescriptlang.org) configuration file.
31. **`LICENSE`**: This Next.js starter is licensed under the `MIT` license.
32. **`README.md`**: A text file containing useful reference information.

## :construction: Caveats

`import` and `export` statements cannot be used **inside** an MDX file.
If you need to use components in your MDX files,
they should be provided to `/components/MDX/index.ts`.

See reason [here](https://github.com/hashicorp/next-mdx-remote#import--export)
and explanation [here](https://github.com/hashicorp/next-mdx-remote/issues/143#issuecomment-1043067293).

## :bookmark: Contact

[![Email](https://img.shields.io/badge/-Gmail-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:sabertazimi@gmail.com)
[![Twitter](https://img.shields.io/badge/-Twitter-1da1f2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/sabertazimi)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sabertazimi)
