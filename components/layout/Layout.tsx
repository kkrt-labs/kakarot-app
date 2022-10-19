import { Container, Flex } from "@chakra-ui/react";

import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: JSX.Element;
}
function Layout({ children }: Props) {
  return (
    <Flex h="full" direction="column" justify="space-between">
      <Header />
      <Container h="full" w="full" pt={8}>
        <Flex flex={1}>{children}</Flex>
      </Container>
      <Footer />
    </Flex>
  );
}

export default Layout;
