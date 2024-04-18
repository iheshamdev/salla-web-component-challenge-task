import { Component, State, h } from '@stencil/core';
import state from '../../global/store';

@Component({
  tag: 'salla-checkout',
  styleUrl: './salla-checkout.css',
  shadow: true,
})
export class SallaCheckout {
  @State() checkoutSubmitted: boolean = false;
  @State() loading: boolean = false;
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
        <div class="checkout-container items-center justify-center text-center">
          <salla-payment-confirmed />
        </div>
      );
    }
    return (
      <div class="checkout-container">
        <salla-checkout-header />
        {state.loading ? (
          <salla-checkout-skeleton />
        ) : (
          [
            // state.currentStepIndex === 0 ? <salla-cart-items /> : <salla-shipping-companies />,
            <div class="current-step">{this.getCurrentStep()}</div>,
            state.currentStepIndex === 0 && <salla-checkout-coupon />,
            <salla-checkout-totals />,
            <button
              class="bg-primary text-white text-md rounded-md px-4 py-3"
              onClick={this.onSubmit}
            >
              {state.currentStepIndex === 0 ? 'Proceed to shipping' : 'Submit'}
            </button>,
          ]
        )}
      </div>
    );
  }
}
