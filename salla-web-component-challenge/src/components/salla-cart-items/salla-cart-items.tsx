import { Component, h } from '@stencil/core';
import state from '../../global/store';
import { fetchCartItems } from '../../global/services';

@Component({
  tag: 'salla-cart-items',
  styleUrl: './salla-cart-items.css',
  shadow: true,
})
export class MyComponent {
  componentWillLoad() {
    fetchCartItems();
  }
  render() {
    return (
      <div class="bg-secondary bg-opacity-15 border border-secondary p-5 rounded-lg">
        <ul class="flex flex-col gap-y-4">
          {state.cartItems.map(item => (
            <li
              key={item.id}
              class="flex justify-between items-start gap-x-4 pb-4 border-b border-secondary last-of-type:border-b-0 last-of-type:pb-0"
            >
              <img
                src={item.thumbnail}
                alt=""
                class="w-[40px] h-[40px] rounded-full border border-[#EEE]"
              />
              {/* <div class="w-10 h-10 rounded-full border border-[#eee] bg-center bg-no-repeat" style={{ backgroundImage: `url(${item.thumbnail})` }}></div> */}
              <div class="flex flex-col gap-y-1 flex-1">
                <a href="#" class="text-sm underline text-primary">
                  {item.label}
                </a>
                <small class="text-[#999] text-xs">
                  {item.price.currency} {item.price.amount}
                </small>
              </div>
              <div class="text-center text-sm font-bold w-5">{item.qty}</div>
              <div class="text-right whitespace-nowrap font-bold text-sm w-20">
                {item.price.currency} {item.price.amount * item.qty}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
