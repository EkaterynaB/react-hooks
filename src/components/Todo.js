import React from 'react';
import PropTypes from 'prop-types';

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import EditTodoForm from './EditTodoForm';

import useToggleState from "../hooks/useToggleState";

const Todo = ({ id, task, completed, removeTodo, toggleTodo, editTodo  }) => {
  const [isEditing, toggle] = useToggleState(false);
  
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

Todo.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  completed: PropTypes.bool,
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  editTodo: PropTypes.func,
};

export default Todo;
