import React from 'react'
import "./App.css";
import Todo from './components/Todo';

const App: React.FC = () => {

  return (
    <>
      <h1>App Component</h1>
      <Todo/>
      <Todo/>
      <Todo/>
    </>
  )
}

export default App
