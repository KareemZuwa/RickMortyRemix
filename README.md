# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm install
```

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes. Note - Make sure you have updated your Node.js.

## Testing

From your terminal:

```sh
npm run test
```

This starts your test on terminal and will run on firefox, chromuim and webkit(if you have an too old version of OS webkit will fail).
The test only contains a snippet test for navigating from landing to the Locations page
After test run Playwright will serve HTML report at http://localhost:9323. Press Ctrl+C on terminal to quit the test.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
