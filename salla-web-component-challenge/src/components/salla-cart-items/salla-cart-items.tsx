import { Component, h } from '@stencil/core';
import state from '../../global/store';
import { fetchCartItems } from '../../global/services';

@Component({
  tag: 'salla-cart-items',
  styleUrl: './salla-cart-items.css',
  shadow: true,
})
export class SallaCartItems {
  componentWillLoad() {
    fetchCartItems();
  }
  render() {
    return (
      <div class="cart-items ">
        <ul>
          {state.cartItems.map(item => (
            <li key={item.id}>
              {/* <div
                class="w-10 h-10 rounded-full border border-[#eee] bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${item.thumbnail})`, backgroundSize: '160%' }}
              ></div> */}
              <img src={item.thumbnail} alt="" />
              <div class="content">
                <div class="product-name">
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
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
