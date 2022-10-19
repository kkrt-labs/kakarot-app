import { Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { ethers } from "ethers";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const ERC20_KAKAROT_ADDR = "0x3814EaBD9cf0E30e766d7cDaF911af6c56A7A5dA";

const Home: NextPage = () => {
  const [bytecode, setBytecode] = useState<string | undefined>(undefined);
  const fetchBytecode = () => {
    ethers
      .getDefaultProvider("goerli")
      .getCode(ERC20_KAKAROT_ADDR)
      .then(setBytecode);
  };
  return (
    <Flex h="full" direction="column">
      <Text>
        <b>Kakarot</b>
      </Text>
      <Text>
        <b>ERC-20 Kakrot (Goerli)</b> {ERC20_KAKAROT_ADDR}
      </Text>
      <Button onClick={fetchBytecode}>Fetch</Button>
      <Text>
        <b>Bytecode</b>
      </Text>
      <Textarea
        contentEditable={false}
        value={bytecode}
        placeholder="Wait for fetching..."
      />
    </Flex>
  );
};

export default Home;
