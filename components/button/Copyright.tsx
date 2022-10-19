import { Flex, HStack, Link, Text } from "@chakra-ui/react";

function Copyright() {
  return (
    <Flex w="full" direction={{ base: "column", md: "row" }} justify="end">
      <Text mr={1}>Copyright ©</Text>
      <HStack>
        <Text>{new Date().getFullYear()}</Text>
        <Text ml={1}>-</Text>
        <Text ml={1}>Sayajin Labs. All rights reserved</Text>
      </HStack>
    </Flex>
  );
}

export default Copyright;
