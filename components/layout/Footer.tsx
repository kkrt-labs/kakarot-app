import { Flex, HStack, Text } from "@chakra-ui/react";

import ButtonLink from "../button/ButtonLink";
import Copyright from "../button/Copyright";

function Footer() {
  return (
    <Flex
      borderTop="1px solid"
      borderColor="blackAlpha.300"
      p={4}
      color="blackAlpha.600"
      fontSize="sm"
    >
      <HStack spacing={8}>
        <ButtonLink href="#" isExternal>
          About
        </ButtonLink>
        <ButtonLink
          href="https://github.com/orgs/sayajin-labs/repositories"
          isExternal
        >
          Github
        </ButtonLink>
        <ButtonLink href="#" isExternal>
          Explorer
        </ButtonLink>
      </HStack>
      <Copyright />
    </Flex>
  );
}

export default Footer;
