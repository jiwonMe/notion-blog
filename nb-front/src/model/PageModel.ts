import { API } from 'nb-client/interface';
import { BlockModel } from './BlockModel';

export class PageModel {
  id: string;

  private api: API;

  private state: {
    meta: {
      id: string,
      title: string,
      url: string,
      createTime: string,
      lastEditedTime: string,
      author: string,
      tags: string[],
    },
    data: {
      results: BlockModel[],
    };
  };

  constructor(api: API, id: string) {
    this.id = id;
    this.api = api;
    this.state = {
      ...this.state,
    };
  }

  public async init() {
    this.state.data = await this.api.getPageContent(this.id);
  }

  get meta() {
    return this.state.meta;
  }

  get data() {
    return this.state.data;
  }
}
