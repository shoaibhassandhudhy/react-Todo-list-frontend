import { ITodo,ITaskList } from '../models/todo.model';
import { TodoActionTypes } from './todo.actions.types';
import { TODO_ACTION_TYPES } from '../constants';

export function addTodo(todo: ITodo): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.ADD_TODO_SUCCESS,
    payload: todo,
  };
}

export function bulkRemoveTask(taskList: ITaskList): TodoActionTypes {
  return {
    type: TODO_ACTION_TYPES.BULK_REMOVE_TASKS,
    payload: taskList,
  };
}
