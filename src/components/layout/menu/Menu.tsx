import { MenuButton, MenuList, Menu as ChakraMenu } from "@chakra-ui/react";

import ButtonLink from "../../button/ButtonLink";

import MenuItem from "./MenuItem";

interface Props {
  title: string;
}
function Menu({ title }: Props) {
  return (
    <ChakraMenu>
      <MenuButton as={ButtonLink}>{title}</MenuButton>
      <MenuList fontSize="sm">
        <MenuItem icon="coucou">Disconnect</MenuItem>
        <MenuItem icon="coucou">Github</MenuItem>
        <MenuItem icon="coucou">Telegram</MenuItem>
        <MenuItem icon="coucou">Twitter</MenuItem>
        <MenuItem icon="coucou">About</MenuItem>
      </MenuList>
    </ChakraMenu>
  );
}

export default Menu;
