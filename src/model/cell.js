import { format } from 'date-fns';

export default class Cell {
  constructor(title, priority, dueDate, description) {
    this.title = title;
    this.priority = priority;
    this.description = description;
    this.creationDate = format(new Date(), 'dd-MM-yyyy');
    this.dueDate = dueDate;
    this.completed = false;
    this.id;
    this.listId;
  };
};
