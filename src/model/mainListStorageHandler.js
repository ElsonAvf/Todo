export function getMainList () {
  return JSON.parse(localStorage.getItem('Lists'));
};

export function setMainList (newList) {
  localStorage.setItem('Lists', JSON.stringify(newList));
};