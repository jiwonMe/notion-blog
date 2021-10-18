import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Model } from 'nb-client/model';

import './components/Page';
import './components/PageList';

@customElement('nb-app')
export class App extends LitElement {
  /**
   * @properties
   */

  model: Model;

  /**
   * @private
   */

  static styles = [css`
    
  `]

  protected render() {
    if (window.location.pathname === '/') {
      return html`
      <nb-page-list .model=${this.model}></nb-page-list>
    `;
    }
    if (/\/page\/[-a-zA-Z0-9]*$/g.test(window.location.pathname)) {
      console.log(window.location.pathname);
      const { pageList } = this.model;
      console.log('pageList', pageList);
      return html`
        <nb-page .page=${pageList?.filter((page) => `/page/${page.id}` === window.location.pathname)[0]}></nb-page>
      `;
    }
    return html`page not found`;
  }
}
