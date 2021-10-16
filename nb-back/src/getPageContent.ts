import type { Client } from '@notionhq/client';

export const getPageContent = async ({ notion, pageId }: { notion: Client, pageId: string }) => {
  const properties = await notion.pages.retrieve({ page_id: pageId });
  const content = await notion.blocks.children.list({ block_id: pageId });
  return { properties, content };
};
