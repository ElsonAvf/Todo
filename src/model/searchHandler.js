import { getAllLists, getListById } from './listStorageHandler.js';

export function getSearchedLists(searchedTitle) {
  const allLists = getAllLists();
  const pattern = new RegExp(searchedTitle, 'g');
  const allMatchingTitle = allLists.filter(list => {
    if (list.title.match(pattern)) {
      console.log(searchedTitle)
      return list
    }
  })
  return allMatchingTitle;
}