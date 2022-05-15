---
createdAt: 2022-01-27T15:57:22.000+00:00
tags:
  - Systems
  - Habit
  - Dailies
  - Productivity
layout: '../../layouts/PostLayout.astro'
hidden: false
title: 'Dev Dailies '
subtitle: ''
description:
  Activities, resources, and approaches that benefit developers of any
  level.
---

In James Clear's book, Atomic Habits, one of the most powerful concepts he lays out is systems over goals. He proposes that focusing energy and attention on systems and processes that govern your work will generate more fruitful outcomes than focusing on the output or goal associated with your efforts. That is to say that robust, thought out systems and habits will produce more for you in the long run than focusing on short term goals. I agree with this completely, and with this in mind, I would like to share with you some thoughts and resources on what I think are some good atomic habits developers can apply to their daily workflows.

### Before You Start

Before I get into specific practices, I first want to make clear a concept that is the cornerstone of my workflow philosophy. Good habits protect deep work.

Deep work is work that is performed in a state of distraction-free concentration. These efforts create new value, improve your skill, and are hard to replicate. If you want to go more in depth, I highly suggest checking out Cal Newports book of the same name. Deep work is essential to software development, and must be protected. Good habits can often help offload menial tasks and give structure to your workflow, allowing for the time and space needed for deep work. Automation and tooling as a developer can greatly enhance this as well.

This is why I suggest developers periodically take a serious look at their development environment and assess what is working and what is getting in the way. A general rule for me is to choose tools that take little investment, but reap great rewards. You do not want to spend exponentially more time configuring tooling and automation than what the task is worth. Tools today come with such robust feature offerings, but don't get distracted. Use tools for what work for you and leave the rest in the dust. This is my exact relationship with [Alfred](https://www.alfredapp.com/ 'Alfred'). It is immensely powerful, but I essentially use it for its clipboard and for navigating between applications without my hands leaving the keyboard. That is what works for me. Another favorite tool of mine are slack bots. Too many of them can be just noise, but if you manage your needs correctly, they are indispensable tools for integrations and friendly reminders during the work day.

Once you have your DX where you want with your personal environment, box it up and save it somewhere. This is commonly done with by lifting up your dotfiles to a personal git repo. See [this website](https://dotfiles.github.io/) for a guide if you are unfamiliar. There are some insane open source solutions that go even further that can encrypt sensitive values and store configurations as executable binaries. I have not gone this far but know that this is out there if it is your cup of tea. The main point is this, you will assuredly make some decisions and optimizations that will make your dev environment feel like home, and there is no way you will be able to remember them all. Put your home on your back and take it with you where ever you wish.

### Back on track

Well that was a bit of a side quest. Let's get back to the main storyline. Below are common daily activities of developers. I will go through them one by one to see what ways we can optimize and habitualize around them.

#### Scrum Ceremonies

These are typically pretty static in a developers schedule. The most important thing I would point out for these ceremonies is batching and time-boxing. If your scrum ceremonies are not batched together during your day or if they always seem to go over time, reach out to your scrum master and try and optimize.

Once your scheduling is consistent and approachable (it will never be perfect), set up a habit of preparing for them. For me, it was an end-of-day task on the day before. At the end of every workday, I would sit down with my calendar and make sure I was prepped. This took little effort and mental energy, so it is a good end of day task for me. This can be applied to any scheduled events, not just scrum. In terms of ceremonies though, make sure to put emphasis on prep for grooming and refinement especially. Being thorough and prepared for these meetings are integral to setting up you and your team for success. Comb through the proposed work, take notes on any questions and inconsistencies, really strive to be thorough. Approaching these meetings with precision and intention is important. These meetings are almost always the ones that can go haywire.

Prep for these meetings can be a bit more cerebral, so break out prep for them to its own time if needed. Just make sure its paired with a trigger in your day to ensure you make it a habit. "When I come back to my computer with my first cup of coffee, I will prep for grooming". Make your habits as precise and explicit as possible.

#### Development

I optimize my development tasks like a sandwich. I have habits I enforce at the beginning of the work and at the end. I leave the middle for concentration.

When starting a working session, I made it a habit of getting all the mechanical bits done before ever writing a line of code. This means updating or moving the ticket as needed, communicating with whomever necessary about requirements or issues, etc. etc. Get all possible mechanical elements out of the way to allow for deep work after.

At the end of my working session, I have a checklist that mostly consists of my team's _Definition of Ready_ document. Notice, I said working session and not necessarily when you think your ticket or task is done. This is an important distinction, as you want to make sure you are on the right path if you have to context switch before the work is done. Checking your own work against the definition of done or the definition of ready regularly was a game changer for me. It nearly eliminated all rabbit hole ventures, where I developed something I thought was correct and then only later had to back track. It is a very powerful habit to keep wasted work to a minimum.

#### Code Review

Code reviews in my mind are the most important part of your day as a developer. I also find that code reviews are often easy to slack on, especially when everyone is busy. Because of this, I think healthy habits around code reviews are probably the most beneficial of all. Let's break down code reviews into 3 categories that can be habitualized.

- **When**
  - Remember when I mentioned I liked slack bots. This is where they shine. If you don't use slack or other tools that allow for bots to integrate with your code repos, try things like [Zapier](https://zapier.com/). Get creative however you need to, but automation is the key to life here. Use github? Checkout [Jared Palmer's](https://twitter.com/jaredpalmer/status/1486403287867867144) tweet.
- **What**
  - Keep what you write and review consistent. For you and for your team. Templates and common formats make things consistent. I am a hard advocate of using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Not only is it a template and framework that takes the guessing out of how to write my comments, it also removes the chance of offending the author.
- **How**
  - Streamline and automate how you pull down others code and review it. Check the PR against a checklist of things you want to see in the code. Readability, testing, architecture, etc. Also try and automate how you pull down their branch. One of my favorite evolutions in modern development has been per branch deploys. This literally is the best thing since sliced bread and its benefits push way past just the scope of PR's. If you're not using them, you should be. Try what you can to bring that to your project (low hanging fruit for some serious [impact](https://calinennis.dev/writing/the-secrets-of-seniority) for your org)

Obviously what I have suggested here will not apply to every developer out there, but what I want to get across more than anything is the mindset and approach. Hack your brain through habits and automation to free yourself to focus on the deep work that really matters. It may seem too structured at times, but these structures will add freedom to your day, not take it away.
