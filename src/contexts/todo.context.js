import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodo = [
  { id: 1, task: "Walk the Goldfish", completed: true },
  { id: 2, task: "Buy fruits", completed: false }
  ];

export const TodoContext = createContext();

export function TodoProvider({children}) {
  const todosStuff = useTodoState(defaultTodo);
  
  return <TodoContext.Provider value={todosStuff}>
    {children}
  </TodoContext.Provider>
}
