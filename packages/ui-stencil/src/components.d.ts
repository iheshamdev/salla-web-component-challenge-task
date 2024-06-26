/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SallaBreadcrumb {
    }
    interface SallaCartItems {
    }
    interface SallaCheckout {
    }
    interface SallaCheckoutCoupon {
    }
    interface SallaCheckoutHeader {
    }
    interface SallaCheckoutSkeleton {
    }
    interface SallaCheckoutTotals {
    }
    interface SallaPaymentConfirmed {
    }
    interface SallaRadioBtn {
        "checked": boolean;
        "label"?: string;
        "name": string;
        "radioId": string;
        "value": string;
    }
    interface SallaShippingCompanies {
    }
}
export interface SallaRadioBtnCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSallaRadioBtnElement;
}
declare global {
    interface HTMLSallaBreadcrumbElement extends Components.SallaBreadcrumb, HTMLStencilElement {
    }
    var HTMLSallaBreadcrumbElement: {
        prototype: HTMLSallaBreadcrumbElement;
        new (): HTMLSallaBreadcrumbElement;
    };
    interface HTMLSallaCartItemsElement extends Components.SallaCartItems, HTMLStencilElement {
    }
    var HTMLSallaCartItemsElement: {
        prototype: HTMLSallaCartItemsElement;
        new (): HTMLSallaCartItemsElement;
    };
    interface HTMLSallaCheckoutElement extends Components.SallaCheckout, HTMLStencilElement {
    }
    var HTMLSallaCheckoutElement: {
        prototype: HTMLSallaCheckoutElement;
        new (): HTMLSallaCheckoutElement;
    };
    interface HTMLSallaCheckoutCouponElement extends Components.SallaCheckoutCoupon, HTMLStencilElement {
    }
    var HTMLSallaCheckoutCouponElement: {
        prototype: HTMLSallaCheckoutCouponElement;
        new (): HTMLSallaCheckoutCouponElement;
    };
    interface HTMLSallaCheckoutHeaderElement extends Components.SallaCheckoutHeader, HTMLStencilElement {
    }
    var HTMLSallaCheckoutHeaderElement: {
        prototype: HTMLSallaCheckoutHeaderElement;
        new (): HTMLSallaCheckoutHeaderElement;
    };
    interface HTMLSallaCheckoutSkeletonElement extends Components.SallaCheckoutSkeleton, HTMLStencilElement {
    }
    var HTMLSallaCheckoutSkeletonElement: {
        prototype: HTMLSallaCheckoutSkeletonElement;
        new (): HTMLSallaCheckoutSkeletonElement;
    };
    interface HTMLSallaCheckoutTotalsElement extends Components.SallaCheckoutTotals, HTMLStencilElement {
    }
    var HTMLSallaCheckoutTotalsElement: {
        prototype: HTMLSallaCheckoutTotalsElement;
        new (): HTMLSallaCheckoutTotalsElement;
    };
    interface HTMLSallaPaymentConfirmedElement extends Components.SallaPaymentConfirmed, HTMLStencilElement {
    }
    var HTMLSallaPaymentConfirmedElement: {
        prototype: HTMLSallaPaymentConfirmedElement;
        new (): HTMLSallaPaymentConfirmedElement;
    };
    interface HTMLSallaRadioBtnElementEventMap {
        "radioChange": string;
    }
    interface HTMLSallaRadioBtnElement extends Components.SallaRadioBtn, HTMLStencilElement {
        addEventListener<K extends keyof HTMLSallaRadioBtnElementEventMap>(type: K, listener: (this: HTMLSallaRadioBtnElement, ev: SallaRadioBtnCustomEvent<HTMLSallaRadioBtnElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLSallaRadioBtnElementEventMap>(type: K, listener: (this: HTMLSallaRadioBtnElement, ev: SallaRadioBtnCustomEvent<HTMLSallaRadioBtnElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLSallaRadioBtnElement: {
        prototype: HTMLSallaRadioBtnElement;
        new (): HTMLSallaRadioBtnElement;
    };
    interface HTMLSallaShippingCompaniesElement extends Components.SallaShippingCompanies, HTMLStencilElement {
    }
    var HTMLSallaShippingCompaniesElement: {
        prototype: HTMLSallaShippingCompaniesElement;
        new (): HTMLSallaShippingCompaniesElement;
    };
    interface HTMLElementTagNameMap {
        "salla-breadcrumb": HTMLSallaBreadcrumbElement;
        "salla-cart-items": HTMLSallaCartItemsElement;
        "salla-checkout": HTMLSallaCheckoutElement;
        "salla-checkout-coupon": HTMLSallaCheckoutCouponElement;
        "salla-checkout-header": HTMLSallaCheckoutHeaderElement;
        "salla-checkout-skeleton": HTMLSallaCheckoutSkeletonElement;
        "salla-checkout-totals": HTMLSallaCheckoutTotalsElement;
        "salla-payment-confirmed": HTMLSallaPaymentConfirmedElement;
        "salla-radio-btn": HTMLSallaRadioBtnElement;
        "salla-shipping-companies": HTMLSallaShippingCompaniesElement;
    }
}
declare namespace LocalJSX {
    interface SallaBreadcrumb {
    }
    interface SallaCartItems {
    }
    interface SallaCheckout {
    }
    interface SallaCheckoutCoupon {
    }
    interface SallaCheckoutHeader {
    }
    interface SallaCheckoutSkeleton {
    }
    interface SallaCheckoutTotals {
    }
    interface SallaPaymentConfirmed {
    }
    interface SallaRadioBtn {
        "checked"?: boolean;
        "label"?: string;
        "name"?: string;
        "onRadioChange"?: (event: SallaRadioBtnCustomEvent<string>) => void;
        "radioId"?: string;
        "value"?: string;
    }
    interface SallaShippingCompanies {
    }
    interface IntrinsicElements {
        "salla-breadcrumb": SallaBreadcrumb;
        "salla-cart-items": SallaCartItems;
        "salla-checkout": SallaCheckout;
        "salla-checkout-coupon": SallaCheckoutCoupon;
        "salla-checkout-header": SallaCheckoutHeader;
        "salla-checkout-skeleton": SallaCheckoutSkeleton;
        "salla-checkout-totals": SallaCheckoutTotals;
        "salla-payment-confirmed": SallaPaymentConfirmed;
        "salla-radio-btn": SallaRadioBtn;
        "salla-shipping-companies": SallaShippingCompanies;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "salla-breadcrumb": LocalJSX.SallaBreadcrumb & JSXBase.HTMLAttributes<HTMLSallaBreadcrumbElement>;
            "salla-cart-items": LocalJSX.SallaCartItems & JSXBase.HTMLAttributes<HTMLSallaCartItemsElement>;
            "salla-checkout": LocalJSX.SallaCheckout & JSXBase.HTMLAttributes<HTMLSallaCheckoutElement>;
            "salla-checkout-coupon": LocalJSX.SallaCheckoutCoupon & JSXBase.HTMLAttributes<HTMLSallaCheckoutCouponElement>;
            "salla-checkout-header": LocalJSX.SallaCheckoutHeader & JSXBase.HTMLAttributes<HTMLSallaCheckoutHeaderElement>;
            "salla-checkout-skeleton": LocalJSX.SallaCheckoutSkeleton & JSXBase.HTMLAttributes<HTMLSallaCheckoutSkeletonElement>;
            "salla-checkout-totals": LocalJSX.SallaCheckoutTotals & JSXBase.HTMLAttributes<HTMLSallaCheckoutTotalsElement>;
            "salla-payment-confirmed": LocalJSX.SallaPaymentConfirmed & JSXBase.HTMLAttributes<HTMLSallaPaymentConfirmedElement>;
            "salla-radio-btn": LocalJSX.SallaRadioBtn & JSXBase.HTMLAttributes<HTMLSallaRadioBtnElement>;
            "salla-shipping-companies": LocalJSX.SallaShippingCompanies & JSXBase.HTMLAttributes<HTMLSallaShippingCompaniesElement>;
        }
    }
}
