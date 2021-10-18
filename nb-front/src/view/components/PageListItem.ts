import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

import type { Page } from 'nb-client/interface/Page';

@customElement('nb-page-list-item')
export class ListItem extends LitElement {
  /**
   * @properties
   */
  page: Page;
  /**
   * @private
   */

  static styles = [css`
    div {
      font-family: 'Spoqa Han Sans Neo', sans-serif;
      border: 1px solid;
      width: 600px;
      padding: 10px;
      margin: 10px;
    }
  `]

  protected render() {
    return html`
      <div>
        <a href=${`${window.location}page/${this.page.meta.id}`}><h2>${this.page.meta.title}</h2></a>
        created: <code>${this.page.meta.createTime}</code>
        <pre>${this.page.meta.id}</pre>
        <p>${this.page.meta.tags.map((tag: string) => `[${tag}] `)}</p>
      </div>
    `;
  }
}
