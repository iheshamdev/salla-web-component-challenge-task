import { Plugin } from "vue";
import { applyPolyfills, defineCustomElements } from "salla-ui-stencil/loader";

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
