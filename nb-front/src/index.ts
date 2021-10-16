import 'regenerator-runtime/runtime';

import getPageList from './api/getPageList';

export const main = async () => {
  const pageList = await getPageList();
  console.log(pageList);
};

main();
