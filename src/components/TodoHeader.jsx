import { HStack, Flex, Box } from "@chakra-ui/react";
import React from "react";
import { BiHome  } from "react-icons/bi";
function TodoHeader() {
  return (
    <HStack h={"50px"} w={"100%"} m={"2vw"} px={"3vw"}>
      <Flex align={"center"}>
        <BiHome 
          color={"#888cdf"}
          fontSize={"30px"}
          border={"3px solid blue"}
        />
        <Box ml={"10px"} fontSize={"30px"} fontWeight={"500"} color={"#888cdf"} fontFamily={ "Poppins"}>
          Tasks
        </Box>
      </Flex>
    </HStack>
  );
}

export default TodoHeader;
