import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

export interface TodoObject {
  name: string;
  done: boolean;
}

export default function Todo() {
  const [todos, setTodos] = useState<TodoObject[]>([]);
  const [todo, setTodo] = useState<TodoObject>({name:"", done: false})

  const completedTodos =todos.filter((todo)=> todo.done).length;
  const totalTodos = todos.length;

  return (
    <>
      <Form todos={todos} setTodos={setTodos} todo={todo} setTodo={setTodo} />
      <TodoList todos={todos} setTodos={setTodos}/>
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
    </>
  );
}
