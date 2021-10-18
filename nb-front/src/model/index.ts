import { API } from 'nb-client/interface';
import { DatabaseModel } from './DatabaseModel';
import { PageModel } from './PageModel';
import { PageModelContainer } from './PageModelContainer';

export class Model {
  private api: API;

  private pageModelContainer: PageModelContainer;

  private databaseModel: DatabaseModel;

  public pageList: PageModel[] = [];

  constructor(api: API) {
    this.api = api;
    /** singleton */
    this.pageModelContainer = new PageModelContainer(api);
    this.databaseModel = new DatabaseModel(api);
    this.databaseModel.init();
  }

  async init() {
    const pageMetaList = await this.api.getPageList() ?? [];
    await pageMetaList.forEach(
      async (meta) => {
        const page = await this.pageModelContainer.get(meta.id);
        console.log(page.data);
        this.pageList = [...this.pageList, page];
      },
    );
    console.log(this.pageList);
  }

  get database() {
    return this.pageModelContainer;
  }
}
