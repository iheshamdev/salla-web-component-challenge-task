import { Component, h } from '@stencil/core';

@Component({
  tag: 'salla-checkout-skeleton',
  styleUrl: './salla-checkout-skeleton.css',
  shadow: true,
})
export class SallaCheckoutSkeleton {
  render() {
    return (
      <div role="status" class="animate-pulse">
        {/* <div class="flex items-center gap-x-4 mb-5">
            <div class="h-4 bg-lightGray rounded-full w-[83px]"></div>
            <div class="h-[2px] bg-lightGray rounded-full flex-1"></div>
        </div> */}
        <div class="h-[236px] bg-lightGray rounded-lg mb-5"></div>
        <div class="flex items-center justify-between gap-x-4 mb-5">
          <div class="h-4 bg-lightGray rounded-full w-44"></div>
          <div class="h-4 bg-lightGray rounded-full w-24"></div>
        </div>
        <div class="flex items-center justify-between gap-x-4 mb-5">
          <div class="h-4 bg-lightGray rounded-full w-44"></div>
          <div class="h-4 bg-lightGray rounded-full w-24"></div>
        </div>
        <div class="h-10 w-full bg-lightGray rounded-lg"></div>
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
}
