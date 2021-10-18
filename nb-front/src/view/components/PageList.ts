import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Model } from 'nb-client/model';

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
    const { pageMetaList } = this.model;
    if (pageMetaList !== null && pageMetaList.length > 0) {
      return html`${pageMetaList.map((page) => html`
        <nb-page-list-item .page=${page}></nb-page-list-item>
      `)}`;
    }
    return html`failed to load page list`;
  }
}
