import { createStore } from '@stencil/store';

interface CheckoutState {
  checkoutSteps: string[];
  currentStepIndex: number;
  cartItems: CartItem[];
  shippingCompanies: ShippingCompany[];
  shippingFees: number;
}

const { state } = createStore<CheckoutState>({
  checkoutSteps: ['cart', 'shipping'],
  currentStepIndex: 1,
  cartItems: [],
  shippingCompanies: [],
  shippingFees: 0,
});

export default state;
