# Astro powered personal site 🚀

[Site](https://calinennis.dev)

## Stack

I am using Astro for its 0js default and its first class markdown support. Great usecase for a simple site and blog as well as a great DX (vite, partial hydration, write in any framework).

My approach:
Anything rendered on the server: Astro or React
Anything client-side: SolidJS

This will allow for a robust echosystem for authoring (React), with a small footprint for any interactivity I need (SolidJS);

## Styling

Originally went with tailwind but found I wanted more architectural control for an easier themeing and freedom to do some more complex things.
Moved to SASS/PostCSS (supported out of the box with Astro) using custom properties for my design tokens (based off of the amazing [open-props](https://open-props.style) project. For a great authoring experience, I relied on the VScode extension [CSS Var Complete](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar). Highly reccomend.

Also looked to use Anthony Fu's [unplugin-icons](https://github.com/antfu/unplugin-icons). It is an amazing project, I just had to remove it due to multiple JSX renderers (react & preact) tripping up the plugin complier. [astro-icon](https://github.com/natemoo-re/astro-icon) is another good package based off of unplugin-icons and used in astro files. Its wonderful, but I chose not to author in astro files unless it was a top level component.

## Deploy

No brainer to use Vercel. It was between Netflix and Vercel and I went with Vercel mainly b/c I found out you can leverage their image CDN on deploy with a simple JSON config.
