import { Component, State, h } from '@stencil/core';
import { fetchCoupons } from '../../global/services';
import state from '../../global/store';
import { DiscountCouponIcon, RemoveIcon } from '../icons';

@Component({
  tag: 'salla-checkout-coupon',
  styleUrl: './salla-checkout-coupon.css',
  shadow: true,
})
export class SallaPrimaryBtn {
  @State() value: string = '';
  @State() showInvalidMsg: boolean = false;

  componentWillLoad() {
    if (state.coupons.length === 0) fetchCoupons();
  }

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }

  applyCoupon = () => {
    if (this.value) {
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
          <DiscountCouponIcon />
          <span class="uppercase">{state.appliedCoupon.label}</span>
          <RemoveIcon />
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
        <div class="coupon-field">
          <input
            type="text"
            placeholder="Insert code"
            value={this.value}
            onInput={event => this.handleChange(event)}
          />
          <button onClick={this.applyCoupon}>Apply</button>
        </div>
      </div>
    );
  }
}
