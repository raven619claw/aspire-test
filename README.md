## Project link

https://682d8d1372cfb81009f153f2--bejewelled-mandazi-4f87f7.netlify.app


## How to Run the project

```bash
npm i
npm run start
npm run build <- for production builds
```

## Folder Structure
```
src/
│
├── assets                    # contains all images and icons
├── components                # contains all common base components. didnt use a library, created my own
├── containers                # containers, components that wrap and display multiple components
├── pages                     # routes
├── services                  # using this to store the useApi hook, generally API middlerware and such
├── store                     # zustand data store for card and its actions
├── styles                    # global style and theme obj.
├── types                     # global types
├── App.tsx                   # Root react container
├── index.tsx                 # main React application entry point
└── webpack.config.js         # build config
```

## State management

Using zustand as the global state library, cleaner and simpler to use shared state than redux

## Styling

Used styled componennts.

Created a generic theme object, just using it for colors but can be extended.

## Routing

React router with /cards as a separate route

## Build

Webpack to build and chunk out different routes for performance, separate chunk for react and other libraries

## Data Fetching

Added a mock useApi hook that delays data fetching from mock.ts by 3 seconds to simulate API fetching.