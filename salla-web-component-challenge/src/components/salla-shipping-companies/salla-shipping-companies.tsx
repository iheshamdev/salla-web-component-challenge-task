import { Component, h } from '@stencil/core';
import state from '../../global/store';
import { fetchShippingCompanies } from '../../global/services';

@Component({
  tag: 'salla-shipping-companies',
  styleUrl: './salla-shipping-companies.css',
  shadow: true,
})
export class SallaShippingCompanies {
  selectCompany(company) {
    state.selectedShippingCompany = company;
    state.shippingFees = company.fees.amount;
  }

  componentWillLoad() {
    fetchShippingCompanies();
  }

  render() {
    return (
      <div class="flex flex-col flex-1 border-b border-lightGray">
        {state.shippingCompanies.map(company => (
          <salla-radio-btn
            key={company.id}
            name="choose_shipping_company"
            radioId={company.id}
            value={company.name}
            checked={state.selectedShippingCompany?.id === company.id}
            onRadioChange={() => this.selectCompany(company)}
          >
            <div class="flex-1 flex justify-between items-center gap-x-3 cursor-pointer">
              <img src={company.logo} alt="" class="w-10" />
              <h4 class="flex-1 text-black[333]">{company.label}</h4>
              {company.fees.amount === 0 ? (
                <span class="font-bold text-black[333]">Free</span>
              ) : (
                <span class="font-bold text-black[333]">{`${company.fees.currency} + ${company.fees.amount}`}</span>
              )}
            </div>
          </salla-radio-btn>
        ))}
      </div>
    );
  }
}
