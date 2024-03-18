import { Component, State, h } from '@stencil/core';
import state from '../../global/store';

@Component({
  tag: 'salla-checkout',
  styleUrl: './salla-checkout.css',
  shadow: true,
})
export class MyComponent {
  @State() checkoutSubmitted: boolean = false;
  getCurrentStep = () =>
    state.currentStepIndex === 0 ? <salla-cart-items /> : <salla-shipping-companies />;

  onSubmit = () => {
    if (state.currentStepIndex >= state.checkoutSteps.length - 1) {
      this.checkoutSubmitted = true;
      return;
    }
    state.currentStepIndex++;
  };

  render() {
    if (this.checkoutSubmitted) {
      return (
        <div class="checkout-container items-center justify-center gap-y-4">
          <div class="flex flex-col gap-y-2 items-center">
            <img src="/assets/logo.svg" alt="" class="w-8" />
            <h1 class="text-primary font-bold text-lg">StoreName</h1>
          </div>
          <h2 class="font-black text-black[333] text-[38px] leading-8">Payment Confirmed</h2>
          <p class="text-black[999] text-lg">Thank you for shopping</p>
          <a href="#" class="underline text-[#22BA99] text-sm">
            return to store
          </a>
        </div>
      );
    }
    return (
      <div class="checkout-container">
        <salla-checkout-header />
        {/* cart items || shipping companies */}
        <div class="current-step">{this.getCurrentStep()}</div>
        {state.currentStepIndex === 0 && <salla-checkout-coupon />}
        <salla-checkout-totals />
        <button class="bg-primary text-white text-md rounded-md px-4 py-3" onClick={this.onSubmit}>
          Proceed to shipping
        </button>
      </div>
    );
  }
}
