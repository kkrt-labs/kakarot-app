import { Flex, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  isDone: boolean;
  children: string;
}
function StepItem({ title, isDone, children }: Props) {
  return (
    <Flex direction="column">
      <Text fontSize="md" fontWeight="bold" color="blackAlpha.900">
        {title}
      </Text>
      <Flex
        mt={2}
        py={2}
        flex={1}
        border="1px solid"
        borderColor="blackAlpha.300"
        borderRadius="md"
        align="center"
      >
        <Flex justify="center" align="center" px={4}>
          {isDone ? "Done" : "Wait"}
        </Flex>
        <Text>{children}</Text>
      </Flex>
    </Flex>
  );
}

export default StepItem;
