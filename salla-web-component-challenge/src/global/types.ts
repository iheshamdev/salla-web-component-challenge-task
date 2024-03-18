type CheckoutState = {
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
  appliedDiscount: number;
};
type CartItem = {
  id: string;
  label: string;
  thumbnail: string;
  qty: number;
  price: {
    currency: string;
    amount: number;
  };
};

type ShippingCompany = {
  id: string;
  name: string;
  label: string;
  logo: string;
  fees: {
    currency: 'SAR';
    amount: number;
  };
};

type Coupon = {
  id: string;
  name: string;
  label: string;
  discount: {
    type: 'percentage';
    amount: string;
  };
};
