import { Client } from '@notionhq/client';
import { getDatabase } from './getDatabase';
import { createPage } from './createPage';
import { getPage } from './getPage';

const main = async () => {
  const notion = new Client({ auth: process.env.NOTION_KEY });

  const databaseId = process.env.NOTION_DATABASE_ID as string;

  const response = await getDatabase({ notion, databaseId });

  if (response && response.properties.tags.type === 'multi_select') {
    const { properties: { tags: { multi_select: { options } } } } = response;
  }

  const pages = await getPage({ notion, databaseId });
  console.log(pages);
};

main();
