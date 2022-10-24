import {
  MenuButton,
  MenuList,
  Menu as ChakraMenu,
  Link,
  HStack,
} from "@chakra-ui/react";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { GITHUB_LINK, TELEGRAM_LINK, TWITTER_LINK } from "../../../utils/links";
import ButtonLink from "../../button/ButtonLink";

import MenuItem from "./MenuItem";

interface Props {
  title: string | JSX.Element;
}
function MenuMore({ title }: Props) {
  const externalLinkIcon = solid("arrow-up-right-from-square");
  return (
    <ChakraMenu placement="bottom-end">
      <MenuButton as={ButtonLink}>{title}</MenuButton>
      <MenuList fontSize="sm" px={2}>
        <MenuItem icon={<FontAwesomeIcon icon={externalLinkIcon} />}>
          <Link _hover={{ textDecoration: "none" }} href="/">
            Help center
          </Link>
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={externalLinkIcon} />}>
          <Link _hover={{ textDecoration: "none" }} href="/">
            Documentation
          </Link>
        </MenuItem>
        <MenuItem icon={<FontAwesomeIcon icon={externalLinkIcon} />}>
          <Link _hover={{ textDecoration: "none" }} href="/">
            Legal & Privacy
          </Link>
        </MenuItem>
        <HStack px={2} mt={6} spacing={4}>
          <ButtonLink href={GITHUB_LINK} color="blackAlpha.600">
            <FontAwesomeIcon icon={brands("github")} />
          </ButtonLink>
          <ButtonLink href={TWITTER_LINK} color="blackAlpha.600">
            <FontAwesomeIcon icon={brands("twitter")} />
          </ButtonLink>
          <ButtonLink href={TELEGRAM_LINK} color="blackAlpha.600">
            <FontAwesomeIcon icon={brands("telegram")} />
          </ButtonLink>
        </HStack>
      </MenuList>
    </ChakraMenu>
  );
}

export default MenuMore;
