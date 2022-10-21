import type { LinkProps } from "@chakra-ui/react";
import { Box, Link, Text, forwardRef } from "@chakra-ui/react";

interface Props extends LinkProps {
  isExternal?: boolean;
  href?: string;
  children: JSX.Element | string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
const ButtonLink = forwardRef<Props, "a">(
  ({ children, href, isExternal, onClick, ...rest }, ref) => (
    <Link
      ref={ref}
      href={href}
      isExternal={isExternal}
      transition=".2s all ease-in"
      color="blackAlpha.900"
      _hover={{ textDecoration: "none", color: "blackAlpha.600" }}
      onClick={(event) => onClick && onClick(event)}
      {...rest}
    >
      <Text fontSize="md" fontWeight="bold">
        {children}
      </Text>
    </Link>
  )
);

export default ButtonLink;
