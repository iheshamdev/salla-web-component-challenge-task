import { Config } from '@stencil/core';
import tailwind, { tailwindHMR, setPluginConfigurationDefaults } from 'stencil-tailwind-plugin';
import tailwindcss from 'tailwindcss';
import tailwindConf from './tailwind.config';
import autoprefixer from 'autoprefixer';

setPluginConfigurationDefaults({
  tailwindConf,
  postcss: {
    plugins: [tailwindcss(), autoprefixer()],
  },
});

export const config: Config = {
  namespace: 'salla-web-component-challenge',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [tailwind(), tailwindHMR()],
  devServer: {
    reloadStrategy: 'pageReload',
  },
};
