import { Container, Flex } from "@chakra-ui/react";

import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: JSX.Element;
}
function Layout({ children }: Props) {
  return (
    <Flex h="full" direction="column" justify="flex-start">
      <Header />
      <Container w="full" pt={16} flex={1}>
        <Flex flex={1}>{children}</Flex>
      </Container>
      <Footer />
    </Flex>
  );
}

export default Layout;
