import { FC } from 'react';
import { Checkbox, Typography, Button, Row, Col } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { ITodo } from '../types/data';
import { useTodoStore } from '../store/todoStore';

const { Text } = Typography;

interface ITodoItem extends ITodo {
  index: number;
}

export const TodoItem: FC<ITodoItem> = ({
  id,
  title,
  index,
  completed,
}): JSX.Element => {
  const { toggleTodo, removeTodo } = useTodoStore(
    ({ toggleTodo, removeTodo }) => ({ toggleTodo, removeTodo })
  );
  return (
    <Row gutter={8} style={{ width: '100%' }} align="middle">
      <Col span={2}>{index + 1}.</Col>
      <Col span={2}>
        <Checkbox checked={completed} onChange={() => toggleTodo(id)} />
      </Col>
      <Col span={18} style={{ textAlign: 'start' }}>
        <Text style={{ textDecoration: completed ? 'line-through' : 'none' }}>
          {title}
        </Text>
      </Col>
      <Col span={2}>
        <Button
          type="primary"
          danger
          shape="circle"
          onClick={() => removeTodo(id)}
          icon={<DeleteOutlined />}
        />
      </Col>
    </Row>
  );
};
