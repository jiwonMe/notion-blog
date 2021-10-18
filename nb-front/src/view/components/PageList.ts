import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { Model } from 'nb-client/interface';

import './PageListItem';

@customElement('nb-page-list')
export class PageList extends LitElement {
  /**
   * @properties
   */
  model: Model;

  /**
   * @private
   */

  static styles = [css`
    
  `]

  render() {
    const { pageList } = this.model;
    if (pageList !== null) {
      return html`${pageList.map((page) => html`
        <nb-page-list-item .page=${page}></nb-page-list-item>
      `)}`;
    }
    return html`error`;
  }
}
