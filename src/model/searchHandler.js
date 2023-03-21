import { getAllLists, getListById } from './listStorageHandler.js';

export function getSearchedLists(searchedTitle) {
  const allLists = getAllLists();
  const pattern = new RegExp(searchedTitle, 'gi');
  const allMatchingTitles = allLists.filter(list => {
    if (list.title.match(pattern)) {
      return list;
    };
  });
  return allMatchingTitles;
};

export function getSearchedCells(listId, searchedTitle) {
  const allCells = getListById(listId).cellList;
  const pattern = new RegExp(searchedTitle, 'gi');
  const allMatchingTitles = allCells.filter(cell => {
    if (cell.title.match(pattern)) {
      return cell;
    };
  });
  return allMatchingTitles;
}

export function getSearchedDueDateCells(list, searchedTitle) {
  const pattern = new RegExp(searchedTitle, 'gi');
  const allMatchingTitles = list.filter(cell => {
    if (cell.title.match(pattern)) {
      return cell;
    };
  });
  return allMatchingTitles;
}