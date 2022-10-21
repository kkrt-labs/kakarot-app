import { Flex, Text, VStack } from "@chakra-ui/react";
import { useConnectors } from "@starknet-react/core";

import BoxItem from "../BoxItem";

import Modal from "./Modal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
function ModalConnect({ isOpen, onClose }: Props) {
  const { connect, connectors } = useConnectors();
  return (
    <Modal title="Connect a wallet" isOpen={isOpen} onClose={onClose}>
      <VStack>
        {connectors.map((connector) => (
          <BoxItem
            key={`connector-${connector.id()}`}
            onClick={() => connect(connector)}
          >
            {connector.id()}
          </BoxItem>
        ))}
        {/* Disclaimer */}
        <BoxItem disabled>
          <Text fontSize="xs">
            By connecting a wallet, you agree to Sayajin Labs Terms of Service
            and acknowledge that you have read and understand the Sayajin Labs
            Protocol Disclaimer.
          </Text>
        </BoxItem>
      </VStack>
    </Modal>
  );
}

export default ModalConnect;
