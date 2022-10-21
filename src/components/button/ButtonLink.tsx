import type { LinkProps } from "@chakra-ui/react";
import { Link, Text, forwardRef } from "@chakra-ui/react";

interface Props extends LinkProps {
  isExternal?: boolean;
  href?: string;
  disabled?: boolean;
  children: JSX.Element | string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
const ButtonLink = forwardRef<Props, "a">(
  ({ children, href, disabled, isExternal, onClick, ...rest }, ref) => (
    <Link
      ref={ref}
      href={href}
      isExternal={isExternal}
      transition=".2s all ease-in"
      color="blackAlpha.900"
      cursor={disabled ? "text" : "pointer"}
      _hover={{
        textDecoration: "none",
        color: disabled ? "blackAlpha.900" : "blackAlpha.600",
      }}
      onClick={(event) => !disabled && onClick && onClick(event)}
      {...rest}
    >
      <Text fontSize="md" fontWeight="bold">
        {children}
      </Text>
    </Link>
  )
);

export default ButtonLink;
