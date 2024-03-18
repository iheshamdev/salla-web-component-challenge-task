import { Component, h } from '@stencil/core';
import state from '../../global/store';

@Component({
  tag: 'salla-checkout-totals',
  styleUrl: './salla-checkout-totals.css',
  shadow: true,
})
export class MyComponent {
  render() {
    const totals = [
      {
        label: 'Cart total',
        value: state.cartTotal,
        shouldRender: true,
      },
      {
        label: 'Shipping fees',
        value: state.shippingFees,
        shouldRender: state.currentStepIndex > 0,
      },
      {
        label: 'Totals',
        value: state.cartTotal + state.shippingFees,
        shouldRender: state.currentStepIndex > 0,
      },
    ];
    return (
      <div class="checkout-totals">
        {totals.map(
          item =>
            item.shouldRender && (
              <div class="flex gap-x-4 items-center justify-between">
                <b class="text-black-text">{item.label}</b>
                <div class="flex gap-x-1">
                  <span class="font-bold text-base text-black-text">{state.currency}</span>
                  <span class="font-bold text-base text-black-text">{item.value}</span>
                </div>
              </div>
            ),
        )}
      </div>
    );
  }
}
