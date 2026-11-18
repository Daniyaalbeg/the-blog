# the-blog

This repo is now a Bun workspace monorepo with the Astro site living in `apps/blog`.

## Workspace Layout

```text
.
├── apps/
│   └── blog/
├── package.json
└── bun.lock
```

## Commands

Run these from the workspace root:

| Command           | Action                             |
| :---------------- | :--------------------------------- |
| `bun install`     | Install workspace dependencies     |
| `bun run dev`     | Start the Astro blog dev server    |
| `bun run build`   | Build the Astro blog               |
| `bun run preview` | Preview the Astro production build |
| `bun run check`   | Run `astro check` for the blog app |

If you want to work inside the Astro app directly, it lives in `apps/blog`.
