# Envato Purchase Verifier using Next.js

This is a purchase verifier for Envator using Next.js with Tailwind CSS. It uses the [Envato package](https://www.npmjs.com/package/envato) to verify a purchase and displays some relevant information.

![Preview](https://i.imgur.com/Lg4HoDn.jpg)

## Getting Started

Run the development server:

```bash
npm install   // install packages
npm run dev   // run development server

npm run lint  // run eslint
npm run fix   // auto-fix the linting issues
```

Copy `.env.example` to `.env` and set your Envato personal token. You can generate a token [here](https://build.envato.com/create-token).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If `SANDBOX` is set to true, you can verify a valid purchase using this purchase code:

`86781236-23d0-4b3c-7dfa-c1c147e0dece`
