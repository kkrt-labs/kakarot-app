import { Flex } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | string;
  disabled?: boolean;
  onClick?: () => void;
}
function BoxItem({ children, disabled = false, onClick }: Props) {
  return (
    <Flex
      cursor={disabled ? "inherit" : "pointer"}
      _hover={{ background: disabled ? "transparent" : "blackAlpha.300" }}
      transition="all .2s ease-in"
      w="full"
      justify="center"
      py={4}
      px={4}
      onClick={onClick}
      borderRadius="xl"
      bg={disabled ? "transparent" : "blackAlpha.100"}
    >
      {children}
    </Flex>
  );
}

export default BoxItem;
