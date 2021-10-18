import { API } from 'nb-client/interface';
import { DatabaseModel } from './DatabaseModel';
import { PageModel } from './PageModel';
import { PageModelContainer } from './PageModelContainer';

export class Model {
  private api: API;

  private pageModelContainer: PageModelContainer;

  private databaseModel: DatabaseModel;

  public pageList: PageModel[] = [];

  public pageMetaList: PageModel['meta'][] = [];

  constructor(api: API) {
    this.api = api;
    /** singleton */
    this.pageModelContainer = new PageModelContainer(api);
    this.databaseModel = new DatabaseModel(api);
    this.databaseModel.init();
  }

  async init() {
    const pageMetaList = await this.api.getPageList() ?? [];
    this.pageMetaList = pageMetaList;
    const promisePageList = pageMetaList.map(
      (meta) => this.pageModelContainer.get(meta.id),
    );
    this.pageList = await Promise.all(promisePageList);
    console.log('pageList', this.pageList);
  }

  get database() {
    return this.pageModelContainer;
  }
}
