/* eslint-disable class-methods-use-this */
import 'regenerator-runtime/runtime';

import { api } from './api';
import { Model } from './model';
import { View } from './view';

// import { test } from './model/test';

const main = async () => {
  const model = new Model(api);
  await model.init();
  const view = new View(model);
  console.log(view);
};

main();
// test();
