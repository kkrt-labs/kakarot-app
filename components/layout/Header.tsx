import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Switch,
} from "@chakra-ui/react";

import ButtonLink from "../button/ButtonLink";

function Header() {
  return (
    <Flex justify="space-between" w="full" px={4} py={2}>
      <Flex maxHeight="56px">
        <Image h="48px" src="black_icon_transparent_background.png" />
        <Image h="full" src="black_text-logoname_transparent_background.png" />
      </Flex>
      <HStack spacing={4}>
        <FormControl display="flex" alignItems="center">
          <Switch colorScheme="blackAlpha" id="chainId" />
          <FormLabel htmlFor="chainId" mb="0" ml={4}>
            <ButtonLink href="#">Mainnet</ButtonLink>
          </FormLabel>
        </FormControl>
        <ButtonLink href="#">Connect</ButtonLink>
      </HStack>
    </Flex>
  );
}

export default Header;
