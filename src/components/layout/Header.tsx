import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Switch,
} from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ButtonConnect from "../button/ButtonConnect";
import ButtonLink from "../button/ButtonLink";

import MenuMore from "./menu/MenuMore";

function Header() {
  return (
    <Flex justify="space-between" w="full" px={4} py={2}>
      <Flex maxHeight="56px">
        <Image h="48px" src="black_icon_transparent_background.png" />
        <Image h="full" src="black_text-logoname_transparent_background.png" />
      </Flex>
      <Flex align="center" justify="end">
        <FormControl display="flex" alignItems="center" mr={8}>
          <Switch disabled colorScheme="blackAlpha" id="chainId" />
          <FormLabel htmlFor="chainId" mb="0" ml={4} mr={0}>
            <ButtonLink disabled>Testnet (Goerli)</ButtonLink>
          </FormLabel>
        </FormControl>
        <ButtonConnect mr={2} />
        <MenuMore
          title={
            <Button>
              <FontAwesomeIcon icon={solid("ellipsis")} />
            </Button>
          }
        />
      </Flex>
    </Flex>
  );
}

export default Header;
