import type { Client } from '@notionhq/client';

export const getPageContent = async ({ notion, pageId }: { notion: Client, pageId: string }) => {
  const meta = await notion.pages.retrieve({ page_id: pageId });
  const data = await notion.blocks.children.list({ block_id: pageId });
  return { meta, data };
};
