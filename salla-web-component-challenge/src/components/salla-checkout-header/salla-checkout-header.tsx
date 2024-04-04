import { Component, h } from '@stencil/core';
import state from '../../global/store';
import StoreLogo from '../icons/store-logo';
import { BackArrowIcon } from '../icons';

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
          <StoreLogo />
          <div class="flex-col">
            <h1>StoreName</h1>
            <salla-breadcrumb />
          </div>
        </div>
        <div class="flex gap-x-4 items-center">
          {state.currentStepIndex > 0 && (
            <span class="cursor-pointer" onClick={this.goBack}>
              <BackArrowIcon />
            </span>
          )}
          <h2>{state.checkoutSteps[state.currentStepIndex]}</h2>
          <div class="divider"></div>
        </div>
      </div>
    );
  }
}
