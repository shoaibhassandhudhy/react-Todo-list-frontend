import { TODO_ACTION_TYPES } from 'store/todo/constants';
import { ITodo,ITaskList } from 'store/todo/models/todo.model';

interface IAddTodoAction {
  type: typeof TODO_ACTION_TYPES.ADD_TODO_SUCCESS;
  payload: ITodo;
}

interface IBulkRemoveTask {
  type: typeof TODO_ACTION_TYPES.BULK_REMOVE_TASKS;
  payload: ITaskList;
}
export type TodoActionTypes =
  | IAddTodoAction
  | IBulkRemoveTask;
