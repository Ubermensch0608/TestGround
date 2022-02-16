import { nanoid } from 'nanoid';

export class Memo {
  id?: string;
  userName: string | number;
  title: string;
  text: string;
  timeStamp: string;

  constructor(setUserName: string | number, setTitle: string, setText: string) {
    this.id = nanoid();
    this.userName = setUserName;
    this.title = setTitle;
    this.text = setText;
    this.timeStamp = Date();
  }
}
