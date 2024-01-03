# Haystack Challenge

In this project, I'll create a simple web app that allows users to search for photos using the [Unsplash API](https://unsplash.com/developers).

In order to do it quickly, I boostrapped a project with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). In this README, I'll explain the steps followed to carry out this project, including requirements, architectural and tech decisions.

Please keep in mind that, while there may be more simple ways to achieve this same end product, it has been done like it is in order to showcase some of my abilities.

The app is deployed in this [site](https://haystack-challenge.vercel.app/), in Vercel.

## Running the project locally

The project uses `yarn` and its node version (specified on .nvmrc)is v18.17.0, so to run the project one could just run:

```sh
nvm use
yarn install
yarn dev
```

## Technologies

### NextJS

The project is built upon NextJS, primarily because of its built-in optimizations, which include `next/image` (a no-brainer for a project using lots of images like this one), and the fact that it provides an established setup for routing, SSR and SEO.

### TypeScript

So as to avoid any unwanted bugs by using plain JS. It greatly improves the developer experience and an app reliability.

### TailwindCSS

It's the fastest way to style a webapp, short of using an already established components library. Plus, using Tailwind in a well-implemented architecture (i.e. using design tokens, using atomic design) lets the app be very scalable, and makes changes easier.

### React Query

To fulfill the requirement to use state management for the data, I'm using React Query. It might be a bit overkill for such a simple page since it has a lot of great features that won't be used, but it's being added so as to demonstrate what could be done with it.

## React Testing Library and Jest

Projects are ever-changing by nature, and it is important that when you add a new feature, you are sure you aren't breaking another. Since the app should be "testable", even though unit tests are not required, I'm adding RTL. This library mimics user interactions (clicks, hovers, etc.) so that tests run as if the app is being used.

Jest will be used as a test runner, to write test suites for everything that needs them not using React (API calls, snippets and utilities), while RTL, in turn, will test React components and hooks.

### Others

I'm also using, [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) along with a pre-commit hooks using [Husky](https://typicode.github.io/husky/#/) to safely follow commit conventions. This also helps with checking formatting the code before committing (with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)).

## Analysis

In order to complete any challenge, this one included, it is highly advised to make an ordered list of steps that will help to guide your efforts and keep you on track.

Here's this project's list, written after inspecting both the challenge requirements and the mockups:

1. ✅ Decide technologies to use

2. ✅ Initialize project with Create Next App

3. ✅ Create the Github Repo and configure CI with Vercel

4. ✅ Create issues and branches for components and functionalities

5. Initial configuration: architecture, tests, code quality (prettier, eslint, commit interceptors with husky) and file structure

> This could include a lot more: design tokens, responsive design system, SEO optimization (sitemap, `robots.txt`), internationalization, logging, CMS, analytics, accessibility, environments (`dev`, `prod`, `test`, considering the use of a mock server), release versioning, component playground, etc.

6. Add environment variables to Vercel

7. Make pull requests once each issue is finished

> This is aligned with the continuous delivery and integration mindset, because once a branch is merged to main, Vercel deploys automatically the new changes.

8. Test everything again before submitting

9. Submit!

## Components

The components I identified in the mockups will follow this structure using [atomic design](https://bradfrost.com/blog/post/atomic-web-design/):

### Atoms

- Tag
- Button
- Input
- Header
- Loading

### Molecules

- Image Card

### Templates

- Image search

### Pages

- Home Page
- Tag Page

## Stories

These will be the issues for components and functionalities that will shape the app:

1. Initial configuration: tests, code quality (prettier, eslint, husky), file structure

2. Integrate API calls to Unsplash's API, adding env variables for security

> This is done before even creating the components in order to have in-code the type interface received (and maybe adapted) from the Unsplash API. This will be helpful when defining the properties of each component.

3. Create `tag` and `image-card` components

> These could be done in separate stories, but since the `image-card` will use `tag`, its faster this way.

4. Create `input`, `button` and `image-search` components

> These could be done in separate stories, too

5. Implement `loading` and `header` component, along with `home` and `tag` pages

> These too could be done in separate stories

## Proposed future stories

After finishing the app's MVP, more functionalities could be added to improve its reliability and the user experience.

6. Add tests for components

> Ideally, the tests should be added at the same time as when adding a component, but since this is done in a limited timeframe, and they aren't required (only the architecture), this will ideally be done later on.

7. Add a `pagination` component

8. Add `infinite scrolling` and a `toggle` to switch between it and pagination

# Development decisions

Here I'm going to write about some development decisions and why they've been made.

### Mobile-first

This app follows mobile-first approach, styling first for mobile and then adjusting for wider screens. It is easily done using tailwind's prefixes (`sm`, `md`, `lg`, etc.), which can also be configured to add or modify viewport sizes.

### Grid

Even though the main views could be done with flexbox, grids are better suited to create responsive layouts, since they work in both rows and columns. This makes the changes made to the layouts easier, thus making it more flexible to redesigns for new viewports.

### Animations

I added some animations and transitions to make the app feel more lively and add affordance to the UI:

- Button and tag hover effects
- Loading animations and placeholders
- Header title hover

---

And that's it! If you have any questions, feel free to reach me!
