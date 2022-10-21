import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";

import { isAddress } from "../../../utils/address-utils";

import StepItem from "./StepItem";

function Stepper() {
  const { address } = useAccount();
  const [step, setStep] = useState<number>(0);
  const [contractAddress, setContractAddress] = useState<string>("");

  // TODO Find a better way to manage steps
  // Once address is connected, increase step
  useEffect(() => {
    if (address) {
      setStep(1);
    } else {
      setStep(0);
    }
  }, [address]);

  // Once contractAddress is ok, increase step
  useEffect(() => {
    if (contractAddress) {
      if (isAddress(contractAddress)) {
        setStep(2);
      } else {
        setStep(1);
      }
    }
  }, [contractAddress]);

  return (
    <Flex direction="column">
      {/* Connect wallet step */}
      <Box my={4}>
        <StepItem
          step={0}
          title="Connect your StarkNet wallet"
          isDone={!!address}
        >
          {address ? (
            `Connected (${address})`
          ) : (
            <Button>Connect to wallet</Button>
          )}
        </StepItem>
      </Box>
      {/* Find L1 contract */}
      <Box my={4}>
        <StepItem
          step={0}
          title="Find an EVM contract to fetch"
          isDone={false}
          disabled={step < 1}
        >
          {step < 1 ? (
            "Wait..."
          ) : (
            <Input
              placeholder="Contract address"
              value={contractAddress}
              onChange={(event) => setContractAddress(event.target.value)}
            />
          )}
        </StepItem>
      </Box>
      {step === 2 ? "Done" : "Not done"}
    </Flex>
  );
}

export default Stepper;
