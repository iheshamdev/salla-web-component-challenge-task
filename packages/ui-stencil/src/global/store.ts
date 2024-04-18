import { createStore } from '@stencil/store';

const { state, onChange } = createStore<CheckoutState>({
  checkoutSteps: ['cart', 'shipping'],
  currentStepIndex: 0,
  currency: 'SAR',
  cartItems: [],
  loading: false,
  cartTotal: 0,
  shippingCompanies: [],
  selectedShippingCompany: null,
  shippingFees: 0,
  coupons: [],
  appliedCoupon: null,
  appliedDiscount: 0,
});
// cartItems = {data, loading, error, total}
// shippingCompanies = {data, loading, error, selected, fees}
// coupons = {data, loading, error, applied, discount}
onChange('cartItems', () => {
  state.cartTotal = calculateCartTotal();
});
onChange('appliedCoupon', () => {
  if (state.appliedCoupon) {
    // recalculate cartTotal after applying discount
    state.cartTotal = calculateCartTotal(Number(state.appliedCoupon.discount.amount));
  } else {
    state.cartTotal = calculateCartTotal();
    state.appliedDiscount = 0;
  }
});
onChange('shippingCompanies', () => {
  if (!state.selectedShippingCompany)
    state.selectedShippingCompany = state.shippingCompanies[0] || null;
});

function calculateCartTotal(discount = 0) {
  const cartTotalWithoutDiscount = state.cartItems.reduce(
    (total, item) => total + item.price.amount * item.qty,
    0,
  );
  let total = cartTotalWithoutDiscount;
  if (discount > 0) {
    total = cartTotalWithoutDiscount - cartTotalWithoutDiscount * (discount / 100);
    state.appliedDiscount = cartTotalWithoutDiscount * (discount / 100);
  }
  return total;
}

export default state;
