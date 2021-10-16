import type { Client } from '@notionhq/client';

export const getDatabase = async ({ notion, databaseId }: { notion: Client, databaseId: string }) => {
  try {
    return await notion.databases.retrieve({ database_id: databaseId });
  } catch (error: any) {
    console.error(error.body);
    return null;
  }
};
