class Cell {
  constructor(title, description, priority, dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = false;
    this.creationDate;
    this.index;
  };
};
