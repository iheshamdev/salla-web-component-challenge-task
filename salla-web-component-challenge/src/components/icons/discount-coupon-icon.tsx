import { FunctionalComponent, h } from '@stencil/core';

const DiscountCouponIcon: FunctionalComponent = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.125 8.75H1.875C1.77344 8.75 1.68359 8.71484 1.60547 8.64453C1.53516 8.56641 1.5 8.47656 1.5 8.375C1.5 8.0625 1.39062 7.79688 1.17188 7.57812C0.953125 7.35938 0.6875 7.25 0.375 7.25C0.273438 7.25 0.183594 7.21484 0.105469 7.14453C0.0351562 7.06641 0 6.97656 0 6.875V2.375C0 2.27344 0.0351562 2.1875 0.105469 2.11719C0.183594 2.03906 0.273438 2 0.375 2C0.6875 2 0.953125 1.89062 1.17188 1.67188C1.39062 1.45312 1.5 1.1875 1.5 0.875C1.5 0.773438 1.53516 0.6875 1.60547 0.617188C1.68359 0.539062 1.77344 0.5 1.875 0.5H10.125C10.2266 0.5 10.3125 0.539062 10.3828 0.617188C10.4609 0.6875 10.5 0.773438 10.5 0.875C10.5 1.1875 10.6094 1.45312 10.8281 1.67188C11.0469 1.89062 11.3125 2 11.625 2C11.7266 2 11.8125 2.03906 11.8828 2.11719C11.9609 2.1875 12 2.27344 12 2.375V6.875C12 6.97656 11.9609 7.06641 11.8828 7.14453C11.8125 7.21484 11.7266 7.25 11.625 7.25C11.3125 7.25 11.0469 7.35938 10.8281 7.57812C10.6094 7.79688 10.5 8.0625 10.5 8.375C10.5 8.47656 10.4609 8.56641 10.3828 8.64453C10.3125 8.71484 10.2266 8.75 10.125 8.75ZM2.21484 8H9.78516C9.86328 7.63281 10.0352 7.31641 10.3008 7.05078C10.5664 6.78516 10.8789 6.61328 11.2383 6.53516H11.25V2.71484C10.8828 2.63672 10.5664 2.46484 10.3008 2.19922C10.0352 1.93359 9.86328 1.62109 9.78516 1.26172V1.25H2.21484C2.13672 1.61719 1.96484 1.93359 1.69922 2.19922C1.43359 2.46484 1.12109 2.63672 0.761719 2.71484H0.75V6.53516C1.11719 6.61328 1.43359 6.78516 1.69922 7.05078C1.96484 7.31641 2.13672 7.62891 2.21484 7.98828V8ZM7.5 0.875H8.25V2H7.5V0.875ZM7.5 2.75H8.25V4.25H7.5V2.75ZM7.5 5H8.25V6.5H7.5V5ZM7.5 7.25H8.25V8.375H7.5V7.25ZM3.375 4.25C3.0625 4.25 2.79688 4.14062 2.57812 3.92188C2.35938 3.70312 2.25 3.4375 2.25 3.125C2.25 2.8125 2.35938 2.54688 2.57812 2.32812C2.79688 2.10938 3.0625 2 3.375 2C3.6875 2 3.95312 2.10938 4.17188 2.32812C4.39062 2.54688 4.5 2.8125 4.5 3.125C4.5 3.4375 4.39062 3.70312 4.17188 3.92188C3.95312 4.14062 3.6875 4.25 3.375 4.25ZM3.375 2.75C3.27344 2.75 3.18359 2.78906 3.10547 2.86719C3.03516 2.9375 3 3.02344 3 3.125C3 3.22656 3.03516 3.31641 3.10547 3.39453C3.18359 3.46484 3.27344 3.5 3.375 3.5C3.47656 3.5 3.5625 3.46484 3.63281 3.39453C3.71094 3.31641 3.75 3.22656 3.75 3.125C3.75 3.02344 3.71094 2.9375 3.63281 2.86719C3.5625 2.78906 3.47656 2.75 3.375 2.75ZM5.625 7.25C5.3125 7.25 5.04688 7.14062 4.82812 6.92188C4.60938 6.70312 4.5 6.4375 4.5 6.125C4.5 5.8125 4.60938 5.54688 4.82812 5.32812C5.04688 5.10938 5.3125 5 5.625 5C5.9375 5 6.20312 5.10938 6.42188 5.32812C6.64062 5.54688 6.75 5.8125 6.75 6.125C6.75 6.4375 6.64062 6.70312 6.42188 6.92188C6.20312 7.14062 5.9375 7.25 5.625 7.25ZM5.625 5.75C5.52344 5.75 5.43359 5.78906 5.35547 5.86719C5.28516 5.9375 5.25 6.02344 5.25 6.125C5.25 6.22656 5.28516 6.31641 5.35547 6.39453C5.43359 6.46484 5.52344 6.5 5.625 6.5C5.72656 6.5 5.8125 6.46484 5.88281 6.39453C5.96094 6.31641 6 6.22656 6 6.125C6 6.02344 5.96094 5.9375 5.88281 5.86719C5.8125 5.78906 5.72656 5.75 5.625 5.75ZM2.625 7.25C2.52344 7.25 2.43359 7.21484 2.35547 7.14453C2.28516 7.06641 2.25 6.97656 2.25 6.875C2.25 6.82812 2.25781 6.78516 2.27344 6.74609C2.28906 6.70703 2.30859 6.66797 2.33203 6.62891V6.64062L6.08203 2.14062C6.12109 2.09375 6.16406 2.05859 6.21094 2.03516C6.26562 2.01172 6.32031 2 6.375 2C6.47656 2 6.5625 2.03906 6.63281 2.11719C6.71094 2.1875 6.75 2.27344 6.75 2.375C6.75 2.42188 6.74219 2.46484 6.72656 2.50391C6.71094 2.54297 6.69141 2.58203 6.66797 2.62109L2.91797 7.12109C2.87891 7.16016 2.83203 7.19141 2.77734 7.21484C2.73047 7.23828 2.67969 7.25 2.625 7.25Z"
        fill="#004D5A"
      />
    </svg>
  );
};
export default DiscountCouponIcon;
