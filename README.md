<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->

Tech stack used
Features and/or usage instructions
Installation on developer and production environments
API references
Screenshots
Lessons learned & next steps

# Bookworms Book Club App

## Overview

Bookworms is a centralized hub for book enthusiasts, streamlining the book club experience.

### Features

- Users sign up
- Login
- Create or join book clubs
- Home page lists all book clubs that the user belongs to
- BookClubPage lists the specific book club details, club members, and meeting details
- Set meeting information (book, date, location/online streaming service)

# How I Built Bookworms

# Installation

For installation use the terminal to install node modules with the command:

> npm i

### Tech Stack

- React
- TypeScript
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express
  - bcrypt

### APIs

- No external APIs will be used for this sprint
  - Some nice-to-haves would require a book API (Google Books API, Internet Archive API, Open Library API)
- Server APIs are located in this repo

### Sitemap

- Login page
  - Requires user to either login into an existing account or create a new account
  - Non-members cannot access further information
  - Successful submission redirects user to home page
- Sign up page
  - Successful submission redirects user to home page
- Home page
  - Displays all the book clubs a user belongs to
- Book club page
  - Displays all information specific to the book club (club name, description, members)
- Create a book club page
- Create a meeting page
