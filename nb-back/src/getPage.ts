import type { Client } from '@notionhq/client';

export const getPage = async ({ notion, databaseId }: { notion: Client, databaseId: string }) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'publish',
      checkbox: { equals: true },
    },
  });

  return response.results.map(
    page => ({
      id: page.id,
      url: page.url,
      createTime: page.created_time,
      lastEditedTime: page.last_edited_time,
      // cover: page.cover,
      // icon: page.icon,
      properties: page.properties,
    }),
  );
};
