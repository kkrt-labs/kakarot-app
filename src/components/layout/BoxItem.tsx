import { Flex } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | string;
  disabled?: boolean;
  onClick?: () => void;
}
function BoxItem({ children, disabled = false, onClick }: Props) {
  return <Flex onClick={onClick}>{children}</Flex>;
}

export default BoxItem;
