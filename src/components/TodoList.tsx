import { FC } from 'react';
import { List } from 'antd';

import { TodoItem } from './TodoItem';
import { useTodoStore } from '../store/todoStore';

export const TodoList: FC = (): JSX.Element => {
  const todoItems = useTodoStore((store) => store.todos);

  const listStyles: React.CSSProperties = {
    maxWidth: '500px',
    backgroundColor: 'white',
    margin: '25px auto',
  };

  return (
    <List
      style={listStyles}
      bordered
      locale={{ emptyText: 'There are no todos!' }}
      dataSource={todoItems}
      renderItem={(item, index) => (
        <List.Item>
          <TodoItem index={index} {...item} />
        </List.Item>
      )}
    />
  );
};
