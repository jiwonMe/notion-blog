import type { Client } from '@notionhq/client';

export const createPage = async ({
  notion,
  databaseId,
}
  /** parameter types */
  : {
    notion: Client,
    databaseId: string
  })
  /** return types */
  : Promise<string | null> => {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {},
    });
    return (/[a-z0-9]*$/g.exec(response.url) ?? [''])[0]; // parse the page id
  } catch (error: any) {
    console.error(error.body);
    return null;
  }
};
