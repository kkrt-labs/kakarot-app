import { Flex, HStack } from "@chakra-ui/react";

import { GITHUB_LINK } from "../../utils/links";
import ButtonLink from "../button/ButtonLink";

import Copyright from "./Copyright";

function Footer() {
  return (
    <Flex
      p={4}
      color="blackAlpha.600"
      fontSize="sm"
      direction={{ base: "column", md: "row" }}
    >
      <HStack spacing={8} mb={{ base: 8, md: 0 }}>
        <ButtonLink href="#" isExternal>
          About
        </ButtonLink>
        <ButtonLink href={GITHUB_LINK} isExternal>
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
