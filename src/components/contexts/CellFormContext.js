import React from 'react';

import uniqid from 'uniqid'

import { addCell } from './../../model/cellStorageHandler.js';
import Cell from './../../model/cell.js';

const CellContext = React.createContext(null);
const DispatchCellContext = React.createContext(null);

export function useCellContext() {
  return React.useContext(CellContext);
};
export function useDispatchCellContext() {
  return React.useContext(DispatchCellContext);
};

function reducer(state, action) {
  switch(action.type) {
    case 'change':
      return { ...state, [action.name]: action.value }
    case 'change_description_to_textarea':
      if (state.description.type !== 'textarea') {
        return {
          ...state,
          description: { type: 'textarea', content: [''] }
        }
      }
      //When the previous state is not returned, the state is set to undefined
      return state 
    case 'textarea_description_change':
      return {
        ...state,
        description: {type: 'textarea', content: [action.value]}
      }
    case 'change_description_to_checkbox':
      if (state.description.type !== 'checkbox') {
        return {
            ...state,
            description: { type: 'checkbox', content: [] } 
        }
      }
      return state
    case 'checkbox_description_change':
      const { name, value, checked, type } = action.event;
      //get description's content
      const prevDescriptionContent = [...state.description.content];
      //update only the checkbox or text input with the correct id
      const newDescriptionContent = prevDescriptionContent.map(content => {
        if (content.id === action.id) {
          return {...content, [name]: type === 'checkbox' ? checked : value }
        }
        return content
      });
      //Return the updated content
      return {
        ...state,
        description: { type: 'checkbox', content: newDescriptionContent },
      };
    case 'add_new_checkbox':
      const newContent = [...state.description.content]
      newContent.push({ isChecked: false, text: '', id: uniqid() })
      return {
        ...state,
        description: { type: 'checkbox', content: newContent }
      };
    case 'remove_checkbox':
      if (action.keyCode === 8 && !action.value) {
        const prevContent = [...state.description.content]
        const newContent = prevContent.filter(content => {
          if (content.id !== action.id) return content
        })
        return {
          ...state,
          description: { type: 'checkbox', content: newContent }
        };
      }
      return state
  }
}


export function CellFormProvider({ children }) {
  const [cell, dispatchCell] = React.useReducer(reducer, {
    title: '',
    priority: 'low',
    dueDate: '',
    description: { type: 'textarea', content: [''] },
  })
  return (
    <CellContext.Provider value={ cell }>
      <DispatchCellContext.Provider value={ dispatchCell }>
        { children }
      </DispatchCellContext.Provider>
    </CellContext.Provider>
  )
}