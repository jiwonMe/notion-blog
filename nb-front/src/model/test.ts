import { api } from 'nb-client/api';
import { Model } from './index';

export const test = async () => {
  const model = new Model(api);
  // const page = await model.database.get('0fa4cf68-d3cd-451f-9c99-7d2f2f87293b');
  // console.log(page.data.content);

  /** load all articles */
  // console.log(await model.database.get('0fa4cf68-d3cd-451f-9c99-7d2f2f87293b'));
};
