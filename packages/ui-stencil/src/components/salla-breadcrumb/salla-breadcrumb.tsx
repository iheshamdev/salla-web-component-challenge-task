import { Component, h } from '@stencil/core';

@Component({
  tag: 'salla-breadcrumb',
  styleUrl: './salla-breadcrumb.css',
  shadow: true,
})
export class SallaBreadcrumb {
  // * as we have no routes will render the `items` statically to match the design. in real project should come dynamically from the route
  items = [{ text: 'store', href: '/' }, { text: 'cart', href: '/cart' }, { text: 'checkout' }];

  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol>
          {this.items.map((item, index) => {
            const isLastItem = index === this.items.length - 1;
            return (
              <li>
                {!isLastItem ? (
                  <a href={item.href} class="underline">
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
                {!isLastItem && <span class="text-gray[400]">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
}
