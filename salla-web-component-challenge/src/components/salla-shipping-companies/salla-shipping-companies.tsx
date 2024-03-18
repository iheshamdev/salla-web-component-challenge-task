import { Component, State, h } from '@stencil/core';
import state from '../../global/store';
import { fetchShippingCompanies } from '../../global/services';

@Component({
  tag: 'salla-shipping-companies',
  styleUrl: './salla-shipping-companies.css',
  shadow: true,
})
export class SallaShippingMethods {
  @State() methodSelectedId: string;

  selectMethod(selectedId: string, method) {
    this.methodSelectedId = selectedId;
    state.shippingFees = method.fees.amount;
  }

  componentWillLoad() {
    fetchShippingCompanies();
  }

  render() {
    return (
      <div class="border-b border-gray h-full">
        {state.shippingCompanies.map(method => (
          <salla-radio-btn
            key={method.id}
            name="shipping_method"
            radioId={method.id}
            value={method.name}
            checked={this.methodSelectedId === method.id}
            onRadioChange={event => this.selectMethod(event.detail, method)}
          >
            <div class="flex-1 flex justify-between items-center gap-x-3 cursor-pointer">
              <img src={method.logo} alt="" class="w-10" />
              <h4 class="flex-1 text-black[333]">{method.label}</h4>
              {method.fees.amount === 0 ? (
                <span class="font-bold text-black[333]">Free</span>
              ) : (
                <span class="font-bold text-black[333]">{`${method.fees.currency} + ${method.fees.amount}`}</span>
              )}
            </div>
          </salla-radio-btn>
        ))}
      </div>
    );
  }
}
