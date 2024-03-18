import { createStore } from '@stencil/store';

interface CheckoutState {
  checkoutSteps: string[];
  currentStepIndex: number;
  cartItems: CartItem[];
}

const { state } = createStore<CheckoutState>({
  checkoutSteps: ['cart', 'shipping'],
  currentStepIndex: 1,
  cartItems: [],
});

export default state;
