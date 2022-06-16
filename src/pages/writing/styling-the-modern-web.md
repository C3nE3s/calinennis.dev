---
createdAt: 2022-06-15T21:29:18Z
tags:
  - CSS
  - Tailwind
  - CSS-in-JS
layout: '../../layouts/PostLayout.astro'
hidden: false
title: Styling the Modern Web
subtitle: Pros and Cons of popular approaches
description: Review and opinions on modern CSS styling solutions and frameworks
---

Just use ChakraUI or Tailwind.

If you were to derive your decision from popularity and amount of use, you almost certainly would land on a take like this. But, as always, frontend development moves fast and nothing is ever as cut and clear as it seems.

In this post, I will look over three modern styling approaches, CSS-in-JS, Atomic CSS, and just plain ol’ CSS ™.

It is to be noted, that no matter the approach, I am a firm believer in creating a [DSL](https://en.wiktionary.org/wiki/domain-specific_language#English) for your styling architecture. The benefits of a system based off of [System UI Theme Specification](https://github.com/system-ui/theme-specification) or the like cannot be overstated. It will align product, design, and development in terms of communication and capabilities. It will also bring site wide consistency to a product which is paramount for good user experience.

## CSS-in-JS

Ergonomically speaking, this has always been my favored approach when creating scaleable sites and applications. The co-location of styles and components feels like a match made in heaven. This enables things like modular, extensible Design Systems by default. This has always been a major selling point for CSS-in-JS with the teams and organizations I have worked with. And I can say it lives up to its hype in terms of agility, enablement, and dynamicisim.

But for all its ergonomics, CSS-in-JS has been in the hot seat as of late, and for good reason. To help explain why, lets take a look at the code below.

```tsx
export type TextProps = {
  variant: 'body' | 'caption' | 'hint' | 'label';
} & TypographyFunctionsProps;

const defaultextStyles = {
  fontFamily: 'body',
  fontWeight: 'regular',
  lineHeight: 'copy',
  color: 'text.primary',
  mt: 0,
  mb: 0,
};

const textVariants = variant({
  variants: {
    body: {
      ...defaultextStyles,
      fontSize: 2,
    },
    caption: {
      ...defaultextStyles,
      fontSize: 1,
    },
    hint: {
      ...defaultextStyles,
      fontSize: 0,
    },
    label: {
      ...defaultextStyles,
      fontFamily: 'heading',
      fontSize: 1,
      fontWeight: 'medium',
    },
  },
});

export const Text = styled.p<TextProps>`
  ${textVariants}
  ${typographyFunctions}
`;
```

Here we have a simple `<Text />` component that has some default base styles. It then has a variant API that will apply different styles according to the props passed to it. Herein lies its power and its problem. This component cannot know what variation to apply until it knows what props are being passed to it. Thus, it can only be determined at the runtime of the application. This means more JS must be downloaded by the client to dynamically inject these styles upon resolution.

In no short terms, this is a significant performance concern. The added bundle size served to the client as well as the back and forth between JS, HTML, and CSS needed to paint during render has proven less than ideal for user experience. And it gets worse. The pendulum is swinging in frontend development, and the server is taking on more and more with things with modern approaches like Next. Technologies like React Server Components, where dynamic components are streamed, hydrated, and rendered, only make the story worse for runtime style injection. Don't believe me? Check out [this thread](https://github.com/reactwg/react-18/discussions/110) by one of the prominent maintainers of React.

And while this may seem specific for the React ecosystem, I think it is a fair bet that concurrent rendering and SRR with hydration are approaches that are making headway in every major framework/ecosystem. Furthermore, while adoption of static extraction techniques for these CSS-in-JS libraries could offer some sort of path forward, it still feels like the major onus will be on the consumers of these libraries to know and understand when to "opt-in" to dynamic styling. In other words, it will be complex, most likely not backwards compatible, and will most likely result in major gaps in execution.

It will be interesting to see how this all plays out, but for me I think the ergonomics of CSS-in-JS must take a back seat to user experience. And while there are some innovative attempts in the works, see [Vanilla Extract](https://vanilla-extract.style/), I will be stepping away from this approach until the dust settles. Strongly typed style definitions, I will miss you! And to those of you maintaining Design Systems for organizations that are keeping up with times, good luck and god speed.

## Atomic CSS

Atomic CSS has been around for most of my development career and has **always** been super polarizing. Only with the recent success of Tailwind has it found its way into the hearts of the masses. And kudos to Tailwind, as they created an undeniably great [DSL](https://en.wiktionary.org/wiki/domain-specific_language#English) and API. But outside of its usability, most of its powers actually comes from the Atomic CSS approach.

Atomic CSS generally looks ugly and any engineer that looks at the code below is going to ask what the hell is the point.

```css
.font-thin {
  font-weight: 100;
}
```

Well I will tell you. It helps solve a multitude of footguns that can occur as a project scales. The utility classes help decouple your HTML and CSS. Your bespoke `.some-unique_text {}` classes that only apply to a specific HTML implementation go away. It also solves the problem with the cascade. No more tussling over which styles get applied by specificity. No more `!important` desperation styles. And perhaps the most important thing in my experience, a hard ceiling on the size of your style sheets. Duplication and bloat are eliminated by default with Atomic CSS, and as someone who has done quite a bit of styling clean up in my career, what a freaking relief that is.

Sound like a wonderland? Well it is, mostly. As with any solution, there are negatives and nuances that must be addressed. I think one of the most important nuances with Tailwind or any other Atomic CSS solution is that they are all or nothing approaches. You must buy into the utility system completely and stay within it or else you quickly lose all its benefits. You don’t just drizzle in Atomic CSS into a pre-existing codebase with a different approach. If you do, you are just left with a larger style sheet with possible collisions and mayhem. I have heard horror stories of teams hopping on the hype train of Tailwind and only completing a partial migration only to find out they made their own experience as well as their users worse. Don’t be those teams.

I have also heard the argument that Tailwind should only be used for quick prototypes and smaller projects. The implication is that while Tailwind allows for great speed of development, it lacks in modularity and maintainability. And while I want to balk at that take, there is some merit to it. Remember that variant API in the CSS-in-JS example above? Well as it turns out, achieving something like that in Tailwind is a bit more than trivial. Lets take a look at the code below to illustrate.

```tsx
const button = ({ color, children }) => (
  <button className={`bg-${color}-500`}>{children}</button>
);
```

Why is this an issue? Well in short, Tailwind necessarily purges your unused styles on build. Currently, that system does not parse JS or take into consideration things like template strings. So if `bg-blue-500` is not used anywhere else in your project, then this style will be purged. Even worse, this component will be styled in your dev environment but unstyled in the production build. This can be a doozy to remember and even more of a headache to debug. So with constraints like these, abstracting out components into a Design System can prove tricky. Fret not though, this is not a hard blocker as there are solutions both within Tailwind and with external packages. See this [wonderful writeup](https://levelup.gitconnected.com/dynamic-component-styles-in-vue-options-api-using-tailwind-css-and-lookup-tables-99f9098646e4) as well as [this open source library](https://github.com/joe-bell/cva) respectively.

As far as maintainability, this is a matter of preference and organization techniques. I can understand that super long class strings in HTML may look unsightly, but with an expected ordering given to us for free with [Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier), this should merely be an issue of aesthetic preference. I would say it is still paramount to enforce proper componentization and encapsulation to help insure a cleaner codebase, even though this is not a Tailwind problem per se. While copy and paste culture and duplication won’t really hurt in a technical sense, it can lead to a disperate and frustrating code base to manage. As with most things, changing a single source of truth is much easier than finding 20 instances of the same markup and changing them all individually.

## Plain Ol’ CSS

Why even mention just plain old css? Well, truth be told, CSS has been evolving like crazy in the last few years and has some very powerful mechanisms you can utilize to enact a [DSL](https://en.wiktionary.org/wiki/domain-specific_language#English) and well architected structure. While this no framework solution to styling is the epitome of “results may vary”, I still think a well thought out and executed plain ol' css approach is extremely viable and powerful.

First off, create your DSL using custom properties. Just take a look at Adam Argyle’s amazing [Open Props](https://open-props.style/) project. There are tricks using custom properties I love that cannot be replicated with the same ease as the other approaches. One such trick is theming. With custom properties, you can take your base property definitions and just reassign their values within a data attribute selector as seen [here](https://github.com/C3nE3s/calinennis.dev/blob/bug-fixes/src/styles/vars.css). That way when your user selects a different theme, you just swap the attribute value on the containing HTML element, and voila, everything updates. In tailwind, the default is to specify alterations per element (they do reference back to a theme definition but I still find this much more verbose of a solution). Still not convinced? Check out [this cool trick by Chance Strickland](https://twitter.com/chancethedev/status/1460414683865772033). The granular control you can get by using just the platform is pretty impressive.

Modern CSS features are wonderful, but it is to be noted that people have made and staked entire careers on being CSS subject matter experts. Its a full language with lots of room for innovative and creative solutions you won’t find here. CSS today feels like it has unlimited power to achieve almost anything we may need for the web. With that power comes the responsibility of strong language understanding and disciplined implementations. For these reasons, I find that most teams benefit from some sort of CSS framework or solution.

## Conclusions

CSS-in-JS has wonderful ergonomics and lends itself to great organization and DX by default, but it has a bumpy road ahead to fix its performance issues.

Tailwind is hard to beat and is most often going to be my weapon of choice in most situations. It does, however, have some rough edges when it comes to tackling complex or highly custom implementations.

Plain Ol’ CSS should not be slept on. The language is evolving super fast and [constantly adding features that make it more ergonomic and expressive](https://drafts.csswg.org/css-nesting-1/). Effective implementations will rely on a knowledgable team with rigorous, custom systems that adhere to a [DSL](https://en.wiktionary.org/wiki/domain-specific_language#English) and sidestep common pitfalls such as bloat, coupling, and collisions.
