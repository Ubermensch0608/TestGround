import { nanoid } from "nanoid";

class Todo {
  constructor(todoText) {
    this.id = nanoid();
    this.text = todoText;
  }
}

export default Todo;
