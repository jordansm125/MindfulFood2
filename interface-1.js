import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class Interface1 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <iframe src="./form1pgWithImage.html" width="700" height="1000" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    `;
     
 		
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'interface-1'
      }
    };
  }
}

window.customElements.define('interface-1', Interface1);