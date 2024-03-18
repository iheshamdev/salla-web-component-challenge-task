import { GET } from '../utils/HTTP';
import state from './store';

const STATIC_CART_ITEMS: CartItem[] = [
  {
    id: '001',
    label: 'JBL QuietComfort 45 wireless bluetooth headphones',
    thumbnail: 'https://cdn.salla.sa/oRmZv/bi7pdht4SRGPLmziP5fDcuFyuDOwz4FypJ5svKxU.jpg',
    qty: 1,
    price: {
      currency: 'SAR',
      amount: 1500,
    },
  },
  {
    id: '002',
    label: 'JBL Active Noise Cancelling Headphones',
    thumbnail: 'https://cdn.salla.sa/oRmZv/9wgo7gyYLL6WsYwugU1zZEn3nypaI93MDCPiPhI5.png',
    qty: 1,
    price: {
      currency: 'SAR',
      amount: 750,
    },
  },
  {
    id: '003',
    label: 'JBL AirPods Max - Sky Blue',
    thumbnail: 'https://cdn.salla.sa/oRmZv/ntqWnEYORNd9I37LmsBNb7A0DnSx3kTd9Sa64lKZ.jpg',
    qty: 1,
    price: {
      currency: 'SAR',
      amount: 1650,
    },
  },
];

export async function fetchCartItems() {
  try {
    const res = (await GET({ endpoint: 'items' })) as any;
    state.cartItems = res.data || [];
    return res.data;
  } catch (error) {
    state.cartItems = STATIC_CART_ITEMS;
    return STATIC_CART_ITEMS;
  }
}

const STATIC_SHIPPING_COMPANIES: ShippingCompany[] = [
  {
    id: '002',
    name: 'dhl',
    label: 'DHL',
    logo: 'https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg',
    fees: {
      currency: 'SAR',
      amount: 0,
    },
  },
  {
    id: '003',
    name: 'fedex',
    label: 'FedEx',
    logo: 'https://www.fedex.com/content/dam/fedex-com/logos/logo.png',
    fees: {
      currency: 'SAR',
      amount: 15,
    },
  },
  {
    id: '001',
    name: 'aramex',
    label: 'Aramex',
    logo: 'https://www.aramex.com/Sitefinity/WebsiteTemplates/aramex/App_Themes/aramex/Images/Aramex%20logo%20English.webp',
    fees: {
      currency: 'SAR',
      amount: 25,
    },
  },
];

export async function fetchShippingCompanies() {
  try {
    //   const cartItems = await fetchCartItems();
    const res = (await GET({ endpoint: 'shipping' })) as any;
    state.shippingCompanies = res.data || [];
    return res.data;
  } catch (error) {
    state.shippingCompanies = STATIC_SHIPPING_COMPANIES;
    return STATIC_SHIPPING_COMPANIES;
  }
}
