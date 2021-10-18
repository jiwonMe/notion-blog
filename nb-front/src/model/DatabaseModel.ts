import type { API } from 'nb-client/interface';

export class DatabaseModel {
  private api: API;

  data: any;

  constructor(api: API) {
    this.api = api;
  }

  async init() {
    this.data = await this.api.getDatabase();
    console.log(this.data);
  }
}
