---
createdAt: 2022-02-01T15:30:21Z
tags: []
layout: "../../layouts/PostLayout.astro"
hidden: false
title: The Why of My Site
subtitle: The ideas and choices that went into my personal site creation
description: The choices I made when creating my personal site and why

---
After 8 years in web development, I finally decided to create a little website for myself. I never stopped and took the time to carve out a little corner of the web, but now that I have, I wish I had done so earlier. I had a lot of fun creating this site, so I figured it beneficial to share about the process.

### Motivation

My motivations for creating this site were pretty straight forward. This site was to serve as self promotion for a new job as well as to share my experiences and learnings with whoever would read.

When looking at the job market, it became clear that every application had an ask for a site or digital asset. While I don't think this is a make or break thing, I figured why not oblige while I had some free time in-between gigs. I also can understand that a potential employer might want to see something tangible created by a prospective employee to better understand their abilities and skillset.

The more compelling reason for me to create this site though, was to share my experiences and learn in public. While I realize that my reach is limited and I don't have any aspirations to be dev-rel or a public figure, I still think this is an extremely healthy and beneficial endeavour. After all, I have been jotting down content and learnings for myself over the span of my career, why not open source it and possibly get some feedback?

### Design

Man oh man, was this a doozy for me. First off, I would like to state for the record that I consider myself creative, but I am by no means a designer of any sort. I spent more time and thought on this portion of the site than any other. In fact, I created and abandoned three different versions of this site before finally sticking to this one (even one with some pretty neat generative backgrounds). I have countless drawings of grandiose ideas on my I-pad. It was a journey to say the least. But I would have it no other way. It really allowed me to step out of my developer shoes and appreciate how critical and abstract designing a great web experience from nothing can be.

In the end, the only real successful approach I found was to design in the browser. What does this mean? Basically it boils down to the fact that I used my developer roots and the systems and tools I was familiar with to help guide and drive my site creation while actively developing it. This doesn't mean I abandoned using Figma or sketching out things on my I-pad or notebook. It just means that I used technology to create guard rails for my design.

### Styling

For the record, the styling of my site and the systems used to drive it accounted for probably 75% of my time developing this site. I tried out everything from CSS in JS to Tailwind to my own custom baked CSS properties. What works for you and what works for me will almost assuredly be different, but what all my choices had in common that I think is a must these days is the [System-UI specification](https://github.com/system-ui/theme-specification). An atomic tokenized design system that aligns with a well defined specification is a must, whether for professional large scale products or for silly little sites like this one. It creates healthy guard rails that ensure consistency and continuity in any design.

Personally, from an authoring experience, CSS in JS is my favored approach. Strongly typed CSS properties co-located with your components create a scaleable, maintainable system that is hard to match. But as with every decision, it comes with a cost. Due to the need to support conditional styles, right now almost every CSS in JS library adds to your bundle size. Some are better than others and some notable new comers to the space that are doing a better job of managing this are [Vanilla Extract](https://vanilla-extract.style/documentation/sprinkles-api/) and [Stitches](https://stitches.dev/). Performance was a top requirement of mine for my site, so in the end, I decided against the CSS in JS approach. This was not only because of the overhead of the styling libraries, but because it forced my hand into an SPA approach, which I will go over later on.

My next approach was to use Tailwind. I have used Tailwind in my professional work and have had success with it. I do really like Tailwind, but when creating my site I found a few potholes that really just lead me to want to reach elsewhere. I'll save the details for a later post, but in a nutshell the following are the reasons I decided against its adoption for my site:

* Theming system was overkill for what I wanted/needed
* Some CSS features I needed were hard to achieve inline and required me to custom bake my CSS anyways
* Component theme composition using template strings. Basically, if you use template strings to compose classes for an HTML element and that class is not already used somewhere else in the app, it will get purged for production builds.

      const button = ({color, children}) => (
      	<button className=`bg-${color}-500`>{children}</button>
      )

  This can be worked around, but it is a foot-gun that I have seen and come across a lot and it is super annoying. Read [this](https://v2.tailwindcss.com/docs/just-in-time-mode#arbitrary-value-support) to learn more.

So what did I end up going with? I created my own [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) based off of the [System-UI specification](https://github.com/system-ui/theme-specification) with some help from Adam Argyle's amazing [Open Props](https://open-props.style/) project. To help with the authoring experience, I used the suggested VS Code plugin [CSS Var Complete](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar). It worked great for the most part, but it didn't support `.astro` file types, which made it a bit useless unfortunately. Using custom properties allowed me to do simple things like key off of a html data attribute to override variable values, making authoring extremely simple. No need to write custom css for every single little element. Just have the element to point to `brand-1` and control the values at the root. On the topic of colors and theme, I used [Radiux](https://www.radix-ui.com/colors) color pallets to drive my application. I chose their colors specifically because of their amazing [documentation](https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale) that took out all the guess work on what shades/hues should be used where (again, I am no designer).

### Framework

When making my choice for the framework of this site, I needed a static site generator with the ability add interactivity as I chose. This requirement put the following technologies in the running:

* Gatsby
* Next
* Eleventy
* Astro

All of these offer SSG with interactivity but in the end, I chose [Astro](https://astro.build/) for its 0 JS default and authoring experience ([Eleventy](https://www.11ty.dev/) is a close second btw, check it out if you haven't). Astro is an amazing innovation in the web development community and I could go on in length about its benefits, but I will summarize why it won out:

* Author in any framework
* Access to any frameworks ecosystem (hello react OSS)
* Robust opt-in client-side JS API
* File-based routing
* Markdown support out of the box
* Vite
* Vite
* Vite
* Oh, did I say Vite?

While I do miss client-side routing and a few other things like the image optimization offered by Gatsby and Next, I think for my use case, having a multi-page application suits my requirements best. Dropping the need to have to send 70kb+ over the wire by default (React runtime) is too great a benefit for me to ignore.

Astro allowed me to control the architecture and dependencies of my site with great precision. If I have to ship client side JS, I can choose to add a script tag, or use a small framework like Preact or SolidJS. If I want robust React ecosystem tooling like Framer Motion or Radiux UI primitives, they are mine to use at nearly zero cost. Astro unlocks the full potential to develop at full speed while embracing [the pit of success](https://astro.build/blog/introducing-astro/#embracing-the-pit-of-success).

### Deployment

Vercel. Zero config, instant deployment. Free. Robust API offerings.

### Future Plans

As with any product or website, shipping early and often is the goal. Version 1 of my site is admittedly pretty simple and bare-bones, but it was complete enough to push to production within a week or two. Now I have plans to iterate and do some fun and interesting things.

First, I need to create a system to optimize images for my site. In order to have a great immersive experience, I will need media on my site and it will need to be performant. I am currently looking at using [Vercel's Edge Image Optimization](https://vercel.com/docs/file-system-api#configuration/images) to cache and serve my images at the edge.

Next, I want to work on optimizing my SEO, create an open-graph system to create great thumbnails for my posts, and offer an RSS feed as well. I am looking to increase discoverability and integration into the content I plan to author.

Last, but definitely not least, I want really grow my blog into a world class user experience. I would like to add interactive feedback systems, like voting and reviews. I would like to add aggregate user highlights to let the consumers choose what is important to pick out of my content. I also want to add interactive UI with popover links, robust and interactive code blocks, and any other delight I can bring to the experience.