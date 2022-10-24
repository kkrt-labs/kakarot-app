import type { FlexProps } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";

interface Props extends FlexProps {
  children: JSX.Element | string;
  icon: any;
}
function MenuItem({ children, icon, ...rest }: Props) {
  return (
    <Flex
      cursor="pointer"
      px={2}
      py={2}
      w="full"
      borderRadius="md"
      justifyContent="space-between"
      transition="all .2s ease-in"
      color="blackAlpha.600"
      _hover={{ background: "blackAlpha.100" }}
      {...rest}
    >
      <Box>{children}</Box>
      <Box>{icon}</Box>
    </Flex>
  );
}

export default MenuItem;
