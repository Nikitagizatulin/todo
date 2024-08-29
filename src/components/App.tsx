import { useState, FC } from 'react';
import { Layout, Typography } from 'antd';

import { useTodoStore } from '../store/todoStore';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

const { Header, Content } = Layout;
const { Title } = Typography;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 'auto',
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const titleStyle: React.CSSProperties = {
  color: '#fff',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#8787871f',
};

const layoutStyle: React.CSSProperties = {
  borderRadius: 8,
  overflow: 'hidden',
};

const App: FC = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const onAddTodo = (): void => {
    if (value?.trim()) {
      addTodo({
        id: Date.now(),
        title: value,
        completed: false,
      });
      setValue('');
    }
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Title style={titleStyle} level={2}>
          Your todo list
        </Title>
      </Header>
      <Content style={contentStyle}>
        <AddTodoForm
          onAddTodo={onAddTodo}
          value={value}
          updateValue={setValue}
        />
        <TodoList />
      </Content>
    </Layout>
  );
};

export default App;
