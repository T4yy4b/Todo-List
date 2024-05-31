import {
  HStack,
  Box,
  IconButton,
  Flex,
  Input,
  Checkbox,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { DeleteIcon, EditIcon, CheckIcon, StarIcon } from "@chakra-ui/icons";
import { Badge } from "@chakra-ui/react";

const TodoItem = ({
  task,
  deleteTask,
  updateTask,
  toggleTask,
  toggleImportance,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    updateTask(task.no, newText);
    setIsEditing(false);
  };

  return (
    <HStack
      w={"100%"}
      border={"1px solid #80808066"}
      px={"15px"}
      py={"10px"}
      h={"50px"}
      bg={"#80808066"}
      borderRadius={"6px"}
      justify={"space-between"}
      color={"white"}
    >
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleUpdate();
            }
          }}
          onBlur={handleUpdate}
          autoFocus
          style={{ backgroundColor: "black", color: "white" }}
        />
      ) : (
        <>
          <Checkbox
            sx={{
              "span.chakra-checkbox__control": {
                borderRadius: "50%",
              },
            }}
            isChecked={task.completed}
            onChange={() => toggleTask(task.no)}
            mr={3}
            iconColor="white.800"
            // isInvalid
            colorScheme={"blue"}
          />
          <Box
            flex={"1"}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            onClick={() => toggleTask(task.no)}
          >
            {task.text}
          </Box>
        </>
      )}

      <Flex w={"40%"} align={"center"} justify={"end"}>
        <IconButton
          variant
          fontSize={"18px"}
          color={"gray.400"}
          icon={<EditIcon />}
          onClick={handleEdit}
          type="submit"
        />
        <IconButton
          variant
          fontSize={"18px"}
          color={"gray.400"}
          icon={<DeleteIcon />}
          onClick={() => deleteTask(task.no)}
        />
        <IconButton
          variant
          color={task.isImportant ? "yellow" : "gray.400"}
          fontSize="18px"
          icon={<StarIcon />}
          onClick={() => toggleImportance(task.no)}
        />
        {task.isEdited && (
          <Badge
            colorScheme="green"
            w={"35px"}
            fontSize={"8px"}
            bg={"gray.400"}
          >
            Edited
          </Badge>
        )}
      </Flex>
    </HStack>
  );
};

export default TodoItem;
