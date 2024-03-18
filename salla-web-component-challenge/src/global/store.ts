import { createStore } from '@stencil/store';

interface CheckoutState {
  checkoutSteps: string[];
  currentStepIndex: number;
}

const { state } = createStore<CheckoutState>({
  checkoutSteps: ['cart', 'shipping'],
  currentStepIndex: 1,
});

export default state;
