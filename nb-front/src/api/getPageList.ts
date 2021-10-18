import { PageModel } from 'nb-client/model/PageModel';

const getPageList = async (): Promise<PageModel['meta'][] | null> => {
  const apiUrl = 'http://localhost:8800/api/v1/getPageList';
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json.map((page: any) => {
      const result: PageModel['meta'] = {
        id: page.id,
        url: page.url,
        author: page.properties.author.created_by.name,
        createTime: page.createTime,
        lastEditedTime: page.lastEditedTime,
        title: (page.properties.title.title[0] ?? { plain_text: 'untitled' }).plain_text,
        tags: page.properties.tags.multi_select.map(
          (tag: { name: string, id: string, color: string }) => tag.name,
        ),
      };
      return result;
    });
  } catch (error: any) {
    console.error(error);
    return null;
  }
};

export default getPageList;
