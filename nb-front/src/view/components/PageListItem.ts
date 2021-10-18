import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PageModel } from 'nb-client/model/PageModel';

@customElement('nb-page-list-item')
export class ListItem extends LitElement {
  /**
   * @properties
   */
  page: PageModel['meta'];
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
        <a href=${`${window.location}page/${this.page.id}`}><h2>${this.page.title}</h2></a>
        created: <code>${this.page.createTime}</code>
        <pre>${this.page.id}</pre>
        <p>${this.page.tags.map((tag: string) => `[${tag}] `)}</p>
      </div>
    `;
  }
}
