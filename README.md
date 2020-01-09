# Clubhouse Desktop app

This will create an app that you can install on your computer to run Clubhouse as a local application on your computer.

It doesn't do anything, besides running the regular web app in a webview application. But that way you can have different clubhouse accounts in your browser and app.

## Why

I had an issue when my company started using Clubhouse, and I couldn't accept the invitation with my preexisting account. So I would have to constantly logout and in, in order to access stuff in the different organizations.

But since clubhouse is such a big part of my day to day work, Having it as a separate app on my computer made more sence.

## Getting Started

- Clone the code.
- Run `npm install` or `yarn install`.
- Run `npm run dist` or `yarn dist`
- Look in `./dist` for your installer.

## Wishlist

There are some features I would like to add to this app.

- App icons for mac and linux (right now it's using their twitter avatar for windows).
- Org switcher á la Slack, to conveniently keep multiple sessions going for different orgs, and allow for easy switching between them.
- Migrate to typescript for the sake of sanity.
