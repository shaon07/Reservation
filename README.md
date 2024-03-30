This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

```.
.
└── root/
    └── src/
        ├── app: contain the main router/
        │   └── StoreProvider.tsx: contain redux setup
        ├── components/
        │   ├── common: contain similar components
        │   ├── layers: contain all the main view components
        │   └── view: contain smaller intependent components
        ├── constants: contain all the constant variables
        ├── containers: contain all the page components wrapper
        ├── globalStyles: contain all the styles config
        ├── lib: contain all the external library/
        │   └── redux: contain all the state management
        ├── services: container all the API config
        └── utils: contain all helpers functions
```