# Salla Web Component Challenge Completion 🎉

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

Now you're ready to start development 🎆

## Start working on the stencil web components

## Start working on the consumer react app

## Scripts

- Start the development server of `salla-ui-stencil` package
  ```
  yarn start:salla-ui-stencil
  ```
- Build the `salla-ui-stencil` package for production
  ```
  yarn build:salla-ui-stencil
  ```
- Start the development server of `react-app` consumer
  before you run the next command make sure that you built the `salla-ui-stencil` package. then run:
  ```
  yarn start:react-app
  ```
- Build the `react-app` consumer for production
  ```
  yarn build:react-app
  ```
- Preview the built `react-app` consumer
  ```
  yarn preview:react-app
  ```
- To build all packages
  ```
  yarn build
  ```

## overview of the task completion:

- **Functionality**: Fully functional web components with robust state management using @stencil/store.
- **Styling**: Pixel-perfect implementation of the attached design, utilizing TailwindCSS for a responsive and consistent UI.
- **Code Quality**: Clean, maintainable, and efficient TypeScript codebase, reflecting adherence to best practices.
- **Re-Usability**: Designed for high re-usability across various projects, ensuring seamless integration.
- **Documentation**: Installation and setup are streamlined with a new README file.
- **Performance**: Optimized for speed and efficiency, evidenced by a Lighthouse score of 98.
- **Deploy**: Successfully deployed to Netlify, overcoming the complexities of a monorepo setup.
- **Live Demo**: Experience the web components in action [here](https://salla-checkout-stencil-demo.netlify.app/).

## Lighthouse PageSpeed Insights 🎇

![This is an alt text.](https://i.imgur.com/toN6w2F.png "This is a sample image.")
