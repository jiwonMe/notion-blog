import { API } from 'nb-client/interface';
import { PageModel } from './PageModel';

export class PageModelContainer {
  private data: PageModel[] = [];

  private api: API;

  constructor(api: API) {
    this.api = api;
    this.data = [
      ...this.data,
    ];
  }

  async get(id: string) {
    const targetPage = this.data.filter((item) => item.id === id);

    /** if the page exist */
    if (targetPage.length > 0) {
      return targetPage[0];
    }

    /** else, create new page */
    const newPage = new PageModel(this.api, id);
    await newPage.init(); // need initialize

    this.data = [
      ...this.data,
      newPage,
    ];

    return newPage;
  }
}
