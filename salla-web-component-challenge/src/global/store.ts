import { createStore } from '@stencil/store';

interface CheckoutState {
  checkoutSteps: string[];
  currentStepIndex: number;
  currency: 'SAR';
  cartItems: CartItem[];
  cartTotal: number;
  shippingCompanies: ShippingCompany[];
  selectedShippingCompany: ShippingCompany | null;
  shippingFees: number;
  coupons: Coupon[];
  appliedCoupon: Coupon | null;
}

const { state } = createStore<CheckoutState>({
  checkoutSteps: ['cart', 'shipping'],
  currentStepIndex: 0,
  currency: 'SAR',
  cartItems: [],
  cartTotal: 0,
  shippingCompanies: [],
  selectedShippingCompany: null,
  shippingFees: 0,
  coupons: [],
  appliedCoupon: null,
});

export default state;
