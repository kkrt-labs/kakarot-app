import { Box, Flex } from "@chakra-ui/react";

interface Props {
  children: string;
  icon: string;
}
function Menu({ children, icon }: Props) {
  return (
    <Flex
      cursor="pointer"
      px={4}
      py={1}
      w="full"
      justifyContent="space-between"
      transition="all .2s ease-in"
      _hover={{ color: "blackAlpha.600" }}
    >
      <Box>{children}</Box>
      <Box>{icon}</Box>
    </Flex>
  );
}

export default Menu;
