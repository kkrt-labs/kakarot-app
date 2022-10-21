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
      px={4}
      py={1}
      w="full"
      justifyContent="space-between"
      transition="all .2s ease-in"
      _hover={{ color: "blackAlpha.600" }}
      {...rest}
    >
      <Box>{children}</Box>
      <Box>{icon}</Box>
    </Flex>
  );
}

export default MenuItem;
