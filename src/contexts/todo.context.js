import React, { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';

const defaultTodo = [
  { id: 1, task: "Walk the Goldfish", completed: true },
  { id: 2, task: "Buy fruits", completed: false }
  ];

export const TodoContext = createContext();

export function TodoProvider({children}) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodo);
  
  return <TodoContext.Provider value={{ todos, dispatch }}>
    {children}
  </TodoContext.Provider>
}
