import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { VStack } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import TodoHeader from "./TodoHeader";

const TodoApp = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const nextNo = tasks.length > 0 ? tasks[tasks.length - 1].no + 1 : 1;
  const addTask = (task) => {
    const newTask = {
      no: nextNo,
      text: task,
      completed: false,
      isEdited: false,
      isImportant: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const updateTask = (no, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.no === no ? { ...task, text: newText, isEdited: true } : task
    );
    setTasks(updatedTasks);
  };

  const toggleTask = (no) => {
    const toggledTasks = tasks.map((task) =>
      task.no === no ? { ...task, completed: !task.completed } : task
    );
    setTasks(toggledTasks);
  };

  const toggleImportance = (no) => {
    const importantTask = tasks.map((task) =>
      task.no === no ? { ...task, isImportant: !task.isImportant } : task
    );
    setTasks(importantTask);
  };

  const deleteTask = (no) => {
    const remainingTasks = tasks.filter((task) => task.no !== no);
    setTasks(remainingTasks);
  };

  return (
    <VStack w={"100vw"} h={"100vh"} bg={"black"} py={"2vw"}>
      <TodoHeader />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        toggleTask={toggleTask}
        toggleImportance={toggleImportance}
      />
      <TodoForm addTask={addTask} />
    </VStack>
  );
};

export default TodoApp;
