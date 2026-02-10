---
title: "Building with Nuxt Content"
description: "A quick rundown of how this site renders markdown posts with Nuxt Content."
date: 2026-02-08
tags:
  - nuxt
  - content
  - how-to
---



This site now uses the Nuxt Content module to render markdown safely on the server and in the browser. Here is the gist of the setup:

1. Add markdown files under `content/blog` with front matter for `title`, `description`, and `date`.
2. Use `queryContent()` to list posts and feed them into a simple card list.
3. Render the full post with `<ContentRenderer>` for the selected slug.

Nuxt Content handles parsing markdown, generating a table of contents, and exposing the document through composables, so the pages stay small and maintainable.


  ```js [file.js]{2} meta-info=val
  export default () => {
    console.log('Code block')
  }
  ```

  ![A Cool Image](https://nuxt.com/assets/design-kit/icon-green.png)