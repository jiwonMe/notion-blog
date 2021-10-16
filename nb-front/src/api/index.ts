import getPageList from './getPageList';

const api = async () => {
  const elem = document.getElementById('root');
  if (elem) {
    const pageList = await getPageList();
    elem.innerHTML = JSON.stringify(pageList) ?? '';
  }
};

export default api;
