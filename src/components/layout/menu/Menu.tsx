import {
  MenuButton,
  MenuList,
  Menu as ChakraMenu,
  Link,
} from "@chakra-ui/react";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useConnectors } from "@starknet-react/core";

import { GITHUB_LINK, TELEGRAM_LINK, TWITTER_LINK } from "../../../utils/links";
import ButtonLink from "../../button/ButtonLink";

import MenuItem from "./MenuItem";

interface Props {
  title: string;
}
function Menu({ title }: Props) {
  const { disconnect } = useConnectors();
  return (
    <ChakraMenu>
      <MenuButton as={ButtonLink}>{title}</MenuButton>
      <MenuList fontSize="sm">
        <MenuItem icon={<FontAwesomeIcon icon={brands("github")} />}>
          <Link _hover={{ textDecoration: "none" }} href={GITHUB_LINK}>
            Github
          </Link>
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={brands("telegram")} />}>
          <Link _hover={{ textDecoration: "none" }} href={TELEGRAM_LINK}>
            Telegram
          </Link>
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={brands("twitter")} />}>
          <Link _hover={{ textDecoration: "none" }} href={TWITTER_LINK}>
            Twitter
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            console.log("coucou");
            disconnect();
          }}
          icon={<FontAwesomeIcon icon={solid("arrow-right-from-bracket")} />}
        >
          Disconnect
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={solid("circle-info")} />}>
          About
        </MenuItem>
      </MenuList>
    </ChakraMenu>
  );
}

export default Menu;
