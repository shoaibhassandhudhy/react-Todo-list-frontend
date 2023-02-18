import React from 'react';
import { Tooltip, Tag, List,Checkbox } from 'antd';

import './styles.less';
import { ITodo } from 'store/todo/models/todo.model';

interface ITodoItemProps {
  todo: ITodo;
  onTodoChange:(todo:ITodo,isChecked:any)=>void
}

export const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  onTodoChange
}) => {
    
  return (
    <List.Item
      actions={[
        <Tooltip
          title={'Mark Delete'}
        >
          
        <Checkbox
          
          onChange={e=> onTodoChange(todo,e.target.checked)}
        ></Checkbox>
        </Tooltip>,
      ]} 
      className="list-item"
      key={todo.id}
    >
      <div className="todo-item">
        <Tag color="cyan" className="todo-tag">
          {todo.name}
        </Tag>
      </div>
    </List.Item>
  );
};
