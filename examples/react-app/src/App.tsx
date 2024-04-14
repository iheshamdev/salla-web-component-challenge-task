import { SallaCheckout } from "./lib/components/stencil-generated";
import { defineCustomElements } from "salla-web-component-challenge/loader";
defineCustomElements();

function App() {
  return <SallaCheckout />;
}

export default App;
