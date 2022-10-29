import React from 'react';
import styles from './InputField.module.css';

export default function InputField({text, handleInput, handleSubmit}) {
  return (
    <div className={styles.inputfield}>
        <label className='label'>
            <input value={text} onChange={(e) => handleInput(e.target.value)}/>
            <button onClick={handleSubmit}>Add Todo</button>
        </label>
    </div>
  )
}
