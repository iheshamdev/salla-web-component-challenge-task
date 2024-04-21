# Salla Web Component Challenge Completion

## Description

This repository contains the completed web components for the Salla Web Component Challenge. The project aims to provide a reusable mini checkout system, with components designed to work seamlessly in both React and Vue applications. Following best practices and modern web standards, each component exhibits efficiency, encapsulation, and performance optimization.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/SallaChallenges/WebComponent-Challenge-iheshamdev-7479.git
   ```
2. Navigate to the project directory:
   ```
   cd WebComponent-Challenge-iheshamdev-7479
   ```
3. This project uses [Lerna](https://lerna.js.org/) to manage multiple packages. If you don't have lerna installed globally, you can install it using yarn:
   ```
   yarn global add lerna
   ```
4. Install the dependencies
   ```
   yarn install
   ```

Now you're ready to start development !

## Scripts

- Start the development server of salla-stencil-ui web components
  ```
  yarn start:salla-ui-stencil
  ```
- Start the development server of react-app consumer
  ```
  yarn start:react-app
  ```
- To build all packages
  ```
  yarn build
  ```
- Preview the built react-app in production mode
  ```
  yarn preview:react-app
  ```
