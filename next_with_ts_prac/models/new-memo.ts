import { nanoid } from 'nanoid';

export class setMemo {
  id?: string | number;
  userName: string | number;
  title: string;
  body: string;
  timeStamp?: string;

  constructor(setUserName: number | string, setTitle: string, setText: string) {
    this.id = nanoid();
    this.userName = setUserName;
    this.title = setTitle;
    this.body = setText;
    this.timeStamp = new Date().toLocaleString();
  }
}
