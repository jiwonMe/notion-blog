/* eslint-disable import/prefer-default-export */
import { Client } from '@notionhq/client';

console.log('hello');

const notion = new Client({ auth: process.env.NOTION_KEY });

const databaseId = process.env.NOTION_DATABASE_ID ?? null;

console.log(databaseId);

export const addItem = async (text: string) => {
  try {
    const response = await notion.pages.create({
      parent: { database_id: <string>databaseId },
      properties: {
        title: {
          title: [
            {
              text: {
                content: text,
              },
            },
          ],
        },
      },
    });
    console.log(response);
  } catch (error: any) {
    console.error(error.body);
  }
};
