import React from 'react';
import styles from './Counter.module.css'

export default function Counter() {
   
    const [numbers, setNumbers] = React.useState([1, 2, 3])

    const addNumber = () => {
        setNumbers.push(4)
       
    }
  return (
    <div className={styles.counter}>
        <ul>
            {numbers.map(i => <li key={i}>{i}</li>)}
        </ul>
        <button onClick={addNumber}>New integer</button>
    </div>
  )
}
