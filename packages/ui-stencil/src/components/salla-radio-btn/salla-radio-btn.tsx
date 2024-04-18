import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'salla-radio-btn',
  styleUrl: 'salla-radio-btn.css',
  shadow: true,
})
export class CustomRadioButton {
  @Prop() name: string;
  @Prop() radioId: string;
  @Prop() label?: string;
  @Prop() value: string;
  @Prop() checked: boolean;
  @Event() radioChange?: EventEmitter<string>;

  render() {
    return (
      <label class="radio-btn-container" htmlFor={this.radioId}>
        <input
          type="radio"
          id={this.radioId}
          name={this.name}
          value={this.value}
          checked={this.checked}
          onChange={() => this.radioChange.emit(this.radioId)}
        />
        <div class={`radio-btn-circle ${this.checked ? 'checked' : ''}`}></div>
        {this.label && <span>{this.label}</span>}
        <slot></slot>
      </label>
    );
  }
}
