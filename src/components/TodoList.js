import React from 'react';
import PropTypes from 'prop-types';

import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import Todo from './Todo';

const TodoList = ({ todos, ...props}) => {
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, index) =>
            <React.Fragment key={todo.id}>
              <Todo {...todo} {...props} />
              {todos.length - 1 !== index && <Divider/>}
            </React.Fragment>)}
        </List>
      </Paper>
    );
  }
  return null;
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.number,
    completed: PropTypes.bool,
  })),
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  editTodo: PropTypes.func,
};

export default TodoList;
