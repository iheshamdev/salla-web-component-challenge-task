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
