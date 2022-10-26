import { Button, Flex, Text } from "@chakra-ui/react";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

import StepItem from "../components/layout/stepper/StepItem";
import Stepper from "../components/layout/stepper/Stepper";
import { fetchABI, fetchBytecode } from "../services/api.service";
import { cropAddress } from "../utils/address-utils";

const Home: NextPage = () => {
  const [bytecode, setBytecode] = useState<string | undefined>(undefined);
  const [abi, setAbi] = useState<string | undefined>(undefined);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [selectedContractAddress, setSelectedContractAddress] = useState<
    string | undefined
  >(undefined);

  // Reset bytecode & ABI each time the selected contract changes
  useEffect(() => {
    setAbi(undefined);
    setBytecode(undefined);
  }, [selectedContractAddress]);

  const fetchData = () => {
    if (selectedContractAddress) {
      console.log(selectedContractAddress);
      const promises = [];
      promises.push(
        fetchABI(selectedContractAddress, "goerli").then((result) => {
          setAbi(result);
        })
      );
      promises.push(
        fetchBytecode(selectedContractAddress, "goerli").then((result) => {
          setBytecode(result);
        })
      );
      setLoading(true);
      Promise.all(promises)
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      console.log("Please enter a contract address");
    }
  };

  const renderInfoText = (text: string) => {
    return (
      <Text
        fontSize="sm"
        lineHeight={1.5}
        letterSpacing={1.5}
        color="blackAlpha.600"
      >
        {text}
      </Text>
    );
  };
  return (
    <Flex h="full" w="full" direction="column" maxW="100%">
      <Text>
        <b>Kakarot</b>
      </Text>
      <Stepper onFinish={setSelectedContractAddress} />
      <Button disabled={!selectedContractAddress} onClick={fetchData}>
        Fetch
      </Button>
      {isLoading ? (
        <FontAwesomeIcon icon={solid("circle-notch")} spin />
      ) : (
        <>
          {selectedContractAddress && bytecode && (
            <StepItem
              title="Bytecode"
              isDone
              step={2}
              collapseChildren={renderInfoText(bytecode)}
            >
              {`Bytecode of ${cropAddress(selectedContractAddress)}`}
            </StepItem>
          )}
          {selectedContractAddress && abi && (
            <StepItem
              title="ABI"
              isDone
              step={2}
              collapseChildren={renderInfoText(abi)}
            >
              {`ABI of ${cropAddress(selectedContractAddress)}`}
            </StepItem>
          )}
        </>
      )}
    </Flex>
  );
};

export default Home;
