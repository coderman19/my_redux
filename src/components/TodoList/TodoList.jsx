import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
import { useSelector } from 'react-redux';

export default function TodoList() {
    const todos = useSelector(state => state.todos.todos);

  return (
    <div className={styles.todolist}>
        <ul>
            {
                todos.map(todo => 
                <TodoItem 
                    key={todo.id} 
                    {...todo} 
                />)
            }
        </ul>
    </div>
  )
}
