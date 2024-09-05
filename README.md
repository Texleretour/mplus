## Developing


```bash
pnpm install
```
Add `DATABASE_URL` to a freshly created `.env` file

Then 
```bash
pnpm prisma migrate dev
pnpm dev
```


## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
