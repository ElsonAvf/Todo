import React from 'react'

import List from './List';
import ListForm from './ListForm';
import MainContent from './MainContent';
import AddButton from './AddButton';

import { useMainContentContext } from './contexts/MainContentContext.js';
import { useDisplayFormContext } from './contexts/ToggleFormContext.js';

export default function ListContent() {
  const mainContent = useMainContentContext();
  const displayForm = useDisplayFormContext();
  
  const content = mainContent.content.map(listObj => <List key={listObj.id} listObj={listObj}/>)
  
  return (
    <main>
      <MainContent>
        { content }
      </MainContent>
      <AddButton />
      { displayForm && <ListForm /> }
    </main>
  );
};