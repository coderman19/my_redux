import React from 'react';

import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplete } from '../../store/todoSlice';

import styles from './TodoItem.module.css';



export default function TodoItem({id, text, completed}) {

  const dispatch = useDispatch();

  return (
    <div className={styles.todoitem}>
        <li>
        <input  
            type="checkbox"
            checked={completed} 
            onChange={() => dispatch(toggleTodoComplete({id}))}
            />
          <span className='todoText'>{text}</span>
          <span className='symbol' onClick={() => dispatch(removeTodo({id}))}>
            &times;
          </span>
        </li>
    </div>
  )
}
