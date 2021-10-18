import { Client } from '@notionhq/client';
import type { Response, Request } from 'express';
import { getPageList as _getPageList } from './getPageList';
import { getPageContent as _getPageContent } from './getPageContent';
import { getDatabase as _getDatabase } from './getDatabase';

export const getPageList = async (req: Request, res: Response) => {
  const notion = new Client({ auth: process.env.NOTION_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID as string;

  const pageList = await _getPageList({ notion, databaseId });
  return res.status(200).send(
    pageList,
  );
};

export const getPageContent = async (req: Request, res: Response) => {
  const notion = new Client({ auth: process.env.NOTION_KEY });
  const { pageId } = req.params;
  const page = await _getPageContent({ notion, pageId });
  return res.status(200).send(
    page,
  );
};

export const getDatabase = async (req: Request, res: Response) => {
  const notion = new Client({ auth: process.env.NOTION_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID as string;

  const database = await _getDatabase({ notion, databaseId });
  return res.status(200).send(
    database,
  );
};
