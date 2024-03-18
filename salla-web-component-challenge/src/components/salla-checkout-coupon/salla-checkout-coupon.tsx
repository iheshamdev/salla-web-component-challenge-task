import { Component, State, h } from '@stencil/core';
import { fetchCoupons } from '../../global/services';
import state from '../../global/store';

@Component({
  tag: 'salla-checkout-coupon',
  styleUrl: './salla-checkout-coupon.css',
  shadow: true,
})
export class SallaPrimaryBtn {
  @State() value: string = '';
  @State() showInvalidMsg: boolean = false;

  componentWillLoad() {
    fetchCoupons();
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }

  applyCoupon = () => {
    if (this.value) {
      // TODO: enhance naming convention
      // if there's a value. check if validCoupon
      const validCoupon = state.coupons.find(c => c.name === this.value.toLowerCase().trim());
      if (validCoupon) {
        this.showInvalidMsg = false;
        state.appliedCoupon = validCoupon;
      } else {
        this.showInvalidMsg = true;
      }
      return;
    }
  };

  removeCoupon = () => {
    state.appliedCoupon = null;
    this.value = '';
  };

  render() {
    return state.appliedCoupon ? (
      <div class="coupon-container">
        <div class="applied-coupon">
          <img src="/assets/discount-coupon.svg" alt="" class="w-4" />
          <span class="uppercase">{state.appliedCoupon.label}</span>
          <img
            src="/assets/remove.svg"
            alt=""
            class="w-4 cursor-pointer"
            onClick={this.removeCoupon}
          />
        </div>
        <b class="text-red-500">
          {state.currency} -{state.appliedDiscount}
        </b>
      </div>
    ) : (
      <div class="coupon-container">
        <div class="flex flex-col gap-y-1">
          <b>Have a coupon?</b>
          {this.showInvalidMsg && <small class="text-red-500">Please enter a valid coupon.</small>}
        </div>
        <div class="flex items-stretch gap-x-1 bg-[#eee] bg-opacity-25 rounded-md shadow-inner-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-1">
          <input
            type="text"
            placeholder="Insert code"
            value={this.value}
            onInput={event => this.handleChange(event)}
            class="bg-transparent px-2 py-1 outline-none w-[140px] text-sm"
          />
          <button
            class="bg-primary text-white text-xs rounded px-3 py-1"
            onClick={this.applyCoupon}
          >
            Apply
          </button>
        </div>
      </div>
    );
  }
}
