import { MenuButton, MenuList, Menu as ChakraMenu } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useConnectors } from "@starknet-react/core";

import ButtonLink from "../../button/ButtonLink";

import MenuItem from "./MenuItem";

interface Props {
  title: string | JSX.Element;
}
function MenuAccount({ title }: Props) {
  const { disconnect } = useConnectors();
  return (
    <ChakraMenu placement="bottom-end">
      <MenuButton as={ButtonLink}>{title}</MenuButton>
      <MenuList fontSize="sm" px={2}>
        <MenuItem
          onClick={() => {
            disconnect();
          }}
          icon={<FontAwesomeIcon icon={solid("arrow-right-from-bracket")} />}
        >
          Disconnect
        </MenuItem>
      </MenuList>
    </ChakraMenu>
  );
}

export default MenuAccount;
