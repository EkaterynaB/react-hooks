export default (state, action) => {
  switch(action.type) {
    case 'ADD':
      const id = state.length ? state[state.length - 1].id + 1 : 0;
      return [...state, {id, task: action.task, completed: false }];
    case 'REMOVE':
      console.log(action, state);
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return state.map(todo => (
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ));
    case 'EDIT':
      return state.map(todo => (
        todo.id === action.id ? { ...todo, task: action.task } : todo
      ));
    default:
      return state;
  }
};
