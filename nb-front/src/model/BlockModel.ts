export class BlockModel {
  meta: {
    id: string,
    url: string,
    author: string,
    createTime: string,
    lastEditedTime: string,
    title: string,
    tags: string[],
  }

  data: {
    object: 'block';
    type: string;
    id: string;
    createdTime: string;
    lastEditedTime: string;
    hasChildren: boolean;
  }
}
