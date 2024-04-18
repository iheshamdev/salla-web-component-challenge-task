# salla-checkout



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [salla-cart-items](../salla-cart-items)
- [salla-shipping-companies](../salla-shipping-companies)
- [salla-payment-confirmed](../salla-payment-confirmed)
- [salla-checkout-header](../salla-checkout-header)
- [salla-checkout-skeleton](../salla-checkout-skeleton)
- [salla-checkout-coupon](../salla-checkout-coupon)
- [salla-checkout-totals](../salla-checkout-totals)

### Graph
```mermaid
graph TD;
  salla-checkout --> salla-cart-items
  salla-checkout --> salla-shipping-companies
  salla-checkout --> salla-payment-confirmed
  salla-checkout --> salla-checkout-header
  salla-checkout --> salla-checkout-skeleton
  salla-checkout --> salla-checkout-coupon
  salla-checkout --> salla-checkout-totals
  salla-shipping-companies --> salla-radio-btn
  salla-checkout-header --> salla-breadcrumb
  style salla-checkout fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
