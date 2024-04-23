import { Config } from '@stencil/core';
import tailwind, { tailwindHMR, setPluginConfigurationDefaults } from 'stencil-tailwind-plugin';
import tailwindcss from 'tailwindcss';
import tailwindConf from './tailwind.config';
import autoprefixer from 'autoprefixer';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

const namespace = 'salla-ui-stencil';
const componentCorePackage = namespace;

setPluginConfigurationDefaults({
  tailwindConf,
  postcss: {
    plugins: [tailwindcss(), autoprefixer()],
  },
});

export const config: Config = {
  namespace,
  extras: {
    enableImportInjection: true,
  },
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
    reactOutputTarget({
      componentCorePackage: componentCorePackage,
      proxiesFile: '../ui-stencil-react/lib/components/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage: componentCorePackage,
      proxiesFile: '../ui-stencil-vue/lib/components/stencil-generated/index.ts',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [tailwind(), tailwindHMR()],
  globalStyle: './src/global/app.css',
  devServer: {
    reloadStrategy: 'pageReload',
  },
};
