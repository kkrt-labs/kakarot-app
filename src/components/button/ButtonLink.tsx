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
  ({ children, href, disabled, isExternal, onClick, ...rest }, ref) => {
    const baseColor = "blackAlpha.600";
    return (
      <Link
        ref={ref}
        href={href}
        isExternal={isExternal}
        transition=".2s all ease-in"
        color={disabled ? baseColor : "blackAlpha.900"}
        cursor={disabled ? "text" : "pointer"}
        _active={{ color: baseColor }}
        _hover={{
          textDecoration: "none",
          color: baseColor,
        }}
        onClick={(event) => !disabled && onClick && onClick(event)}
        {...rest}
      >
        <Text fontSize="md" fontWeight="bold">
          {children}
        </Text>
      </Link>
    );
  }
);

export default ButtonLink;
