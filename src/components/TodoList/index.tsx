import React from 'react';

import { List} from 'antd';

import { ITodo } from 'store/todo/models/todo.model';
import { TodoItem } from 'components/TodoItem';

interface ITodoListProps {
  todos: ITodo[];
  onTodoChange:(todo:ITodo,isChecked:any)=>void
}

export const TodoList: React.FC<ITodoListProps> = ({
  todos,
  onTodoChange
}) => (
  
  <List
    locale={{
      emptyText: "There's nothing to do :(",
    }}
    dataSource={todos}
    renderItem={(todo) => (
      <TodoItem
        todo={todo}
        onTodoChange = {onTodoChange}
      />
    )}
   
    pagination={{
      position: 'bottom',
      pageSize: 10,
    }}
  />
);
