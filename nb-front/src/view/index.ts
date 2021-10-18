import { html, render } from 'lit';
import { Model } from 'nb-client/model';

import './components/PageList';
import './App';

export class View {
  model: Model;

  constructor(model: Model) {
    this.model = model;
    render(
      html`<nb-app .model=${model}></nb-app>`,
      document.body,
    );
  }
}
