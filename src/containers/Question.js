import React from 'react'
import Progress from './components/Progress';

function Question({ children, onSubmit }) {
  return (
    <div>
      <Progress value={22} />
      <br />
      {children}
      <br />
      <button onClick={onSubmit}>Продолжить</button>
    </div>
  )
}

export default Question;
