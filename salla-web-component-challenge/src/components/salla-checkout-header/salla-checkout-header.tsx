import { Component, h } from '@stencil/core';
import state from '../../global/store';

@Component({
  tag: 'salla-checkout-header',
  styleUrl: './salla-checkout-header.css',
  shadow: true,
})
export class CheckoutHeader {
  goBack = () => state.currentStepIndex--;

  render() {
    return (
      <div class="salla-checkout-header">
        <div class="flex gap-x-4">
          <img src="/assets/logo.svg" alt="" />
          <div class="flex-col">
            <h1>StoreName</h1>
            <salla-breadcrumb />
          </div>
        </div>
        <div class="flex gap-x-4 items-center">
          {state.currentStepIndex > 0 && (
            <img src="/assets/arrow.svg" alt="" class="cursor-pointer" onClick={this.goBack} />
          )}
          <h2>{state.checkoutSteps[state.currentStepIndex]}</h2>
          <div class="divider"></div>
        </div>
      </div>
    );
  }
}
