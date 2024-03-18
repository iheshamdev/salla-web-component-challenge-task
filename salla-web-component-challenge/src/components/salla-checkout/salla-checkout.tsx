import { Component, h } from '@stencil/core';
import state from '../../global/store';

@Component({
  tag: 'salla-checkout',
  styleUrl: './salla-checkout.css',
  shadow: true,
})
export class MyComponent {
  getCurrentStep = () =>
    state.currentStepIndex === 0 ? <salla-cart-items /> : <salla-shipping-companies />;

  render() {
    return (
      <div class="checkout-container">
        <salla-checkout-header />
        {/* cart items || shipping companies */}
        <div class="current-step">{this.getCurrentStep()}</div>
        {state.currentStepIndex === 0 && <salla-checkout-coupon />}
        <salla-checkout-totals />
        <button
          class="bg-primary text-white text-md rounded-md px-4 py-3"
          onClick={() => {
            if (state.currentStepIndex >= state.checkoutSteps.length - 1) {
              // this.checkoutSubmitted = true;
              console.log('Thank you');
              return;
            }
            state.currentStepIndex++;
          }}
        >
          Proceed to shipping
        </button>
      </div>
    );
  }
}
