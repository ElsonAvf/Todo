import React from 'react';

import Cell from './Cell';
import MainContent from './MainContent';
import CellForm from './CellForm';

import { useMainContentContext } from './contexts/MainContentContext.js';
import { useDisplayFormContext } from './contexts/ToggleFormContext.js';

export default function DueDateContent() {
  const mainContent = useMainContentContext();
  const displayForm = useDisplayFormContext();
  
  const content = mainContent.content.map(cellObj => <Cell key={cellObj.id} cellObj={cellObj}/>)
  
  return (
    <main>
      <MainContent>
        { content }
      </MainContent>
      { displayForm && <CellForm /> }
    </main>
  );
};