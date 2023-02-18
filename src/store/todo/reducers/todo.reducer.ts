import { TODO_ACTION_TYPES } from '../constants';
import { ITodo,ITaskList } from '../models/todo.model';
import { TodoActionTypes } from '../actions/todo.actions.types';
import { v1 as uuidV1 } from 'uuid';
import Item from 'antd/lib/list/Item';

interface ITodoReducerInterface {
  todos: ITodo[];
}

export const initialState: ITodoReducerInterface = {
  todos: [],
};

export const todoReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action?.type) {
    case TODO_ACTION_TYPES.ADD_TODO_SUCCESS:
      return Object.assign({}, state, {
        todos: state.todos.concat({
          ...action.payload,
          ...{
            id: action.payload.id ?? uuidV1(),
          },
        }),
      });
    case TODO_ACTION_TYPES.BULK_REMOVE_TASKS:
     
      return {
        todos: state.todos.filter(
          (todo: ITodo) =>!action.payload.find((item) => item === todo.id)
        ),
      };
    default:
      return state;
  }
};
