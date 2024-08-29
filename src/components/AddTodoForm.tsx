import { Button, Input, Flex } from 'antd';
import type { InputRef } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import {
  useRef,
  useEffect,
  FC,
  ChangeEventHandler,
  KeyboardEventHandler,
} from 'react';

interface AddTodoFormProps {
  value: string;
  updateValue: (val: string) => void;
  onAddTodo: () => void;
}

export const AddTodoForm: FC<AddTodoFormProps> = ({
  value,
  updateValue,
  onAddTodo,
}): JSX.Element => {
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    updateValue(e.target.value);
  };

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e): void => {
    if (e.key === 'Enter') {
      onAddTodo();
    }
  };

  return (
    <Flex justify="center" style={{ margin: '25px auto 0', maxWidth: '350px' }}>
      <Input
        placeholder="Todo title"
        value={value}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        ref={inputRef}
      />
      <Button type="primary" icon={<PlusCircleOutlined />} onClick={onAddTodo}>
        Add
      </Button>
    </Flex>
  );
};
