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
