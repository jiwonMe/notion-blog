import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import type { PageModel } from 'nb-client/model/PageModel';

@customElement('nb-page')
export class Page extends LitElement {
  /**
   * @properties
   */
  page: PageModel | undefined;

  /**
   * @private
   */

  static styles = [css`
    
  `]

  protected render() {
    if (this.page === undefined) {
      return html`no page`;
    }
    return html`
      <h1>${this.page.meta.title}</h1>
      <p>created at ${this.page.meta.createTime}</p>
    `;
  }
}
