import React from 'react';
import closeSvg from './../assets/icons/red_close.svg';

export default function Cell() {
  return (
    <li className='cells'>
      <input type='checkbox' />
      <h4></h4>
      <span><span>
      <button><img src={closeSvg} alt='remove cell' /></button>
    </li>
  );
};