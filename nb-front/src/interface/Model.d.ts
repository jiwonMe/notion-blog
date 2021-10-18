import type { Model } from 'nb-client/model';

export interface Database {
  id: string;
  cover: any;
  icon: any;
  createdTime: string;
  lastEditedTime: string;
  title: {
    plainText: string;
  }[];
  tags: string[]
}

export { Model };
