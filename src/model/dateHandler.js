import { isToday, isThisWeek, parseISO } from 'date-fns';

import { getAllLists } from './listStorageHandler.js';

function getTasks(callback) {
  const allLists = getAllLists();
  let todayTasks = [];
  for (let listIndex = 0; listIndex < allLists.length; listIndex++){
    let today = allLists[listIndex].cellList.filter(task => {
      if (callback(parseISO(task.dueDate)) && !task.completed) {
        return task;
      };
    });
    todayTasks = todayTasks.concat(today)
    console.log(todayTasks)
  };
  return todayTasks;
};

export function getTodayTasks() {
  return getTasks(isToday)
}

export function getThisWeekTasks() {
  return getTasks(isThisWeek)
}