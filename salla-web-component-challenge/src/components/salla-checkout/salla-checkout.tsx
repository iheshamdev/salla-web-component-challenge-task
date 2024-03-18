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
      </div>
    );
  }
}
