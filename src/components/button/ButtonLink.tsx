import { Link, Text } from "@chakra-ui/react";

interface Props {
  isExternal?: boolean;
  href: string;
  children: JSX.Element | string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
function ButtonLink({ children, href, isExternal, onClick }: Props) {
  return (
    <Link
      href={href}
      isExternal={isExternal}
      transition=".2s all ease-in"
      color="blackAlpha.900"
      _hover={{ textDecoration: "none", color: "blackAlpha.600" }}
      onClick={(event) => onClick && onClick(event)}
    >
      <Text fontSize="md" fontWeight="bold">
        {children}
      </Text>
    </Link>
  );
}

export default ButtonLink;
