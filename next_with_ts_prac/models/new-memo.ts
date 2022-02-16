import { nanoid } from 'nanoid';

export class setMemo {
  id?: string;
  userName: string;
  title: string;
  text: string;
  timeStamp: string;

  constructor(setUserName: string, setTitle: string, setText: string) {
    this.id = nanoid();
    this.userName = setUserName;
    this.title = setTitle;
    this.text = setText;
    this.timeStamp = Date();
  }
}
