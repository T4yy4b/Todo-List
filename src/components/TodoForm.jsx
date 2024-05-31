import {
  FormControl,
  HStack,
  Input,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";
const TodoForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl w="100vw" px={"3vw"} my={"20px"}>
        <HStack
          w="100%"
          h="50px"
          bg="#80808066"
          mt="15px"
          borderRadius="8px"
          align="center"
          justifyContent="space-between"
          border={"2px solid #80808066"}
        >
          <IconButton
            variant
            colorScheme="blue"
            aria-label="Search database"
            icon={<AddIcon />}
            color={"#888cdf"}
            type="submit"
          />

          <Input
            type="text"
            placeholder="Add a task"
            size="700px"
            variant="Unstyled"
            // px="1vw"
            pr={"1vw"}
            // mx="10px"
            bg={"transparent"}
            color={"white"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </HStack>
      </FormControl>
    </form>
  );
};

export default TodoForm;
