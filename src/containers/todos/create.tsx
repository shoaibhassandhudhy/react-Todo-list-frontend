import React from 'react';
import { Row, Col, Card, PageHeader } from 'antd';
import { ITodo } from 'store/todo/models/todo.model';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/todo/actions';
import { AddTodoForm } from 'components/AddTodoForm';
import { useHistory,Link } from "react-router-dom";



interface CreateContainerProps {}

export const CreateContainer: React.FunctionComponent<CreateContainerProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormSubmit = (todo: ITodo): void => {
    dispatch(addTodo(todo));
    history.push('/');
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
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <PageHeader
          title="Add Task"
          
          subTitle="To add a Task, just fill the form below and click Button."
        />
        <Link to="/list-tasks">Create Task</Link>
      </Col>

      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Create a new todo">
          <AddTodoForm onFormSubmit={handleFormSubmit} />
        </Card>
      </Col>

    </Row>
  );
};
