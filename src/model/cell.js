export default class Cell {
  constructor(title, priority, dueDate, description) {
    this.title = title;
    this.priority = priority;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = false;
    this.id;
    this.listId;
  };
};
