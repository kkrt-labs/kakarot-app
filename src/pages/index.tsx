import { Box, Button, Flex, Text, Textarea } from "@chakra-ui/react";
import { useAccount } from "@starknet-react/core";
import type { NextPage } from "next";
import { useState } from "react";

import StepItem from "../components/layout/stepper/StepItem";
import { fetchABI, fetchBytecode } from "../services/api.service";

const ERC20_KAKAROT_ADDR = "0x3814EaBD9cf0E30e766d7cDaF911af6c56A7A5dA";

const Home: NextPage = () => {
  const { address } = useAccount();
  const [bytecode, setBytecode] = useState<string | undefined>(undefined);
  const [abi, setAbi] = useState<string | undefined>(undefined);

  const fetchData = () => {
    fetchABI(ERC20_KAKAROT_ADDR, "goerli").then((result) => {
      setAbi(result);
    });
    fetchBytecode(ERC20_KAKAROT_ADDR, "goerli").then((result) => {
      setBytecode(result);
    });
  };
  return (
    <Flex h="full" direction="column">
      <Text>
        <b>Kakarot</b>
      </Text>
      <Text>
        <b>ERC-20 Kakrot (Goerli)</b> {ERC20_KAKAROT_ADDR}
      </Text>
      <Box my={4}>
        <StepItem title="Connect your Starknet wallet" isDone={false}>
          {address ? `Connected (${address})` : "Connect wallet"}
        </StepItem>
      </Box>
      <Button onClick={fetchData}>Fetch</Button>
      <Text>
        <b>Bytecode</b>
      </Text>
      <Textarea
        contentEditable={false}
        value={bytecode}
        placeholder="Wait for fetching..."
      />
      <Text>
        <b>ABI</b>
      </Text>
      <Textarea
        contentEditable={false}
        value={abi}
        placeholder="Wait for fetching..."
      />
    </Flex>
  );
};

export default Home;
