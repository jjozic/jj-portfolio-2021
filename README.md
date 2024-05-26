# Personal Portfolio

I used [Next.js](https://nextjs.org/) to build my new portfolio website because I wanted to make a SEO-friendly site with React. Next.js is a joy to work with and makes building perfomant websites a piece of cake.

- For the styling I haven't used any CSS-in-JS framework for once. I just used CSS-modules with SCSS to keep things simple.
- For the icons I have used the [react-icons](https://react-icons.github.io/react-icons/) package with the [feather](https://feathericons.com/) icon pack.
- Using [next-themes](https://github.com/pacocoursey/next-themes) for simple dark mode integration (no white flash, synced across tabs)
- For deployment I used [Vercel](https://vercel.com/)
- The domain was purchased from [Porkbun](https://porkbun.com/)
- The UI concept design was built with Figma, but was tailored to my needs during development.
- The data for the page currently resides in the `/data/data.js` file.

## Maximum performance

Achieved the highest possible score on lighthouse (as of 18.11.21)

![Screenshot of lighthouse scoreboard](/assets/lighthouse.png)

## Light mode:

![Screenshot of light mode version](/assets/light-mode.png)

## Dark mode:

![Screenshot of dark mode version](/assets/dark-mode.png)

## Running the project yourself

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all dependencies:

```bash
pnpm install
```

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
