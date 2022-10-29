import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


import TodoList from './components/TodoList/TodoList';
import InputField from './components/InputField/InputField';

import {addTodo} from './store/todoSlice';

import './App.css';



 function App() {
// состояние
 
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('');
  };

  return (
    <div className="App">
     
    <InputField 
      text={text}
      handleInput={setText}
      handleSubmit={addTask}
    />
    <TodoList />
    </div>
  );
}

export default App;
