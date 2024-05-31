// src/components/TodoList.js

import TodoItem from "./TodoItem";
import { VStack } from "@chakra-ui/react";

const TodoList = ({
  tasks,
  deleteTask,
  updateTask,
  toggleTask,
  toggleImportance,
}) => {
  return (
    <>
      <VStack
        w={"100vw"}
        h={"1000px"}
        px={"3vw"}
        // bg={"gray"}
        sx={{
          overflowY: "scroll",
          scrollbarWidth: "none", // For Firefox
          "-ms-overflow-style": "none", // For Internet Explorer and Edge
          "&::-webkit-scrollbar": {
            display: "none", // For Chrome, Safari, and Opera
          },
        }}
      >
        {tasks.map((task) => {
          return (
            <TodoItem
              key={task.no}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
              toggleTask={toggleTask}
              toggleImportance={toggleImportance}
            />
          );
        })}
        ha
      </VStack>
    </>
  );
};

export default TodoList;
