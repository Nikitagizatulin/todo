import { create } from 'zustand';
interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

type State = {
  todos: Array<ITodo>;
};

type Action = {
  toggleTodo: (todoId: number) => void;
  addTodo: (todo: ITodo) => void;
  removeTodo: (todoId: number) => void;
};

export const useTodoStore = create<State & Action>((set) => ({
  todos: [],
  toggleTodo: (todoId) => {
    set(({ todos }) => ({
      todos: todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      }),
    }));
  },
  removeTodo: (todoId) => {
    set(({ todos }) => ({ todos: todos.filter(({ id }) => id !== todoId) }));
  },
  addTodo: (todo) => {
    set(({ todos }) => ({ todos: [...todos, todo] }));
  },
}));
