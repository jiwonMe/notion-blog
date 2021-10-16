import { addItem } from 'notion-blog/api';

const elem = document.getElementById('root') as HTMLElement;
elem.innerHTML = 'complete';
await addItem('hello');
