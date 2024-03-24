import { Component, h } from '@stencil/core';

@Component({
  tag: 'salla-payment-confirmed',
  styleUrl: './salla-payment-confirmed.css',
  shadow: true,
})
export class SallaPaymentConfirmed {
  render() {
    return (
      <div class="flex flex-col items-center justify-center gap-y-3">
        <div class="flex flex-col gap-y-2 items-center">
          <img src="/assets/logo.svg" alt="" class="w-8" />
          <h1 class="text-primary font-bold text-lg">StoreName</h1>
        </div>
        <h2 class="font-black text-black[333] text-[38px]">Payment Confirmed</h2>
        <p class="text-black[999] text-lg">Thank you for shopping</p>
        <a href="#" class="underline text-[#22BA99] text-sm">
          return to store
        </a>
      </div>
    );
  }
}
