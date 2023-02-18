import React from 'react';
import { Row, Col, Card,PageHeader, Button, Popconfirm } from 'antd';
import { useState } from "react"
import { ITodo,ITaskList } from 'store/todo/models/todo.model';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/todo/reducers';
import { TodoList } from 'components/TodoList';
import {bulkRemoveTask } from 'store/todo/actions';
import { message } from 'antd';
import { Link } from "react-router-dom";

import './styles.less';

interface ITodosContainerProps {}

export const TodosContainer: React.FunctionComponent<ITodosContainerProps> = () => {
  const todos: ITodo[] = useSelector((state: RootState) => state.todo.todos);
  
  const dispatch = useDispatch();
  const  [taskList, setTaskList] = useState<ITaskList>([]);
  let taskTemp = [...taskList];
  const handleCheckedTask = (todo: ITodo,checked:any) =>{
    if(todo.id && checked){
      taskTemp.push(todo.id)
      setTaskList(taskTemp)
    }else {
      taskTemp = taskList.filter((id:string) => id !== todo.id)
      setTaskList(taskTemp)
    }
    
  };
  const handleBulkRemoveTask = (): void => {
    dispatch(bulkRemoveTask(taskList));
  };

  return (
    <Row
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="todos-container"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 35 }}
        lg={{ span: 35 }}
        xl={{ span: 35 }}
      >
       <PageHeader
          title="Kwanso Task Manger"
          
          subTitle="Beta. Desgin Improvements Needed"
        />
       <Card >
        <Link to="/create">Create Task</Link>
        </Card>
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 35 }}
        lg={{ span: 35 }}
        xl={{ span: 35 }}
      >
        <Card title="Todo List">
          <TodoList
            todos={todos}
            onTodoChange={handleCheckedTask}
          />
          
        </Card>
      </Col>
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 35 }}
        lg={{ span: 35 }}
        xl={{ span: 35 }}
      >
       
       <Card >
      
         <Button className="remove-todo-button" onClick={()=>handleBulkRemoveTask()}  danger> Remove Selected Tasks</Button>
        </Card>
      </Col>

    </Row>
  );
};
