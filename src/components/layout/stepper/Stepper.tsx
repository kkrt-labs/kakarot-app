import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";

import { cropAddress, isAddress } from "../../../utils/address-utils";

import StepItem from "./StepItem";

enum STEPS {
  CONNECT_WALLET,
  L1_CONTRACT_ADDRESS,
  FINISH,
}

interface StepperProps {
  onFinish?: (contractAddress: string | undefined) => void;
}
function Stepper({ onFinish }: StepperProps) {
  const { address } = useAccount();
  const [step, setStep] = useState<number>(STEPS.CONNECT_WALLET);
  const [contractAddress, setContractAddress] = useState<string | undefined>(
    undefined
  );

  // Once address is connected, increase step
  useEffect(() => {
    if (address) {
      setStep(STEPS.L1_CONTRACT_ADDRESS);
    } else {
      setStep(STEPS.CONNECT_WALLET);
    }
  }, [address]);

  // Once contractAddress is ok, increase step
  useEffect(() => {
    if (contractAddress !== undefined) {
      if (isAddress(contractAddress)) {
        setStep(STEPS.FINISH);
      } else {
        setStep(STEPS.L1_CONTRACT_ADDRESS);
      }
    }
  }, [contractAddress]);

  useEffect(() => {
    if (onFinish) {
      console.log(step === STEPS.FINISH ? contractAddress : undefined);
      onFinish(step === STEPS.FINISH ? contractAddress : undefined);
    }
  }, [onFinish, step, contractAddress]);

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
            `Connected (${cropAddress(address)})`
          ) : (
            <Button>Connect to wallet</Button>
          )}
        </StepItem>
      </Box>
      {/* Find L1 contract */}
      <Box my={4}>
        <StepItem
          step={1}
          title="Find an EVM contract to fetch"
          isDone={step > STEPS.L1_CONTRACT_ADDRESS}
          disabled={step < STEPS.L1_CONTRACT_ADDRESS}
        >
          {step < STEPS.L1_CONTRACT_ADDRESS ? (
            "Wait..."
          ) : (
            <Input
              placeholder="Contract address"
              value={contractAddress || ""}
              onChange={(event) => setContractAddress(event.target.value)}
            />
          )}
        </StepItem>
      </Box>
    </Flex>
  );
}

export default Stepper;
