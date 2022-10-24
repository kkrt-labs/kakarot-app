import type { BoxProps } from "@chakra-ui/react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";

import { cropAddress } from "../../utils/address-utils";
import MenuAccount from "../layout/menu/MenuAccount";
import ModalConnect from "../layout/modal/ModalConnect";

function ButtonConnect({ ...rest }: BoxProps) {
  const { address } = useAccount();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  // Close the modal once account connected
  useEffect(() => {
    if (address) {
      setModalOpen(false);
    }
  }, [address]);

  const renderAddressMenuTitle = (connectedAddress: string) => {
    return (
      <Button>
        <Text>{cropAddress(connectedAddress)}</Text>
      </Button>
    );
  };

  return (
    <Box {...rest}>
      {!address ? (
        <Button onClick={() => setModalOpen(true)}>Connect</Button>
      ) : (
        <MenuAccount title={renderAddressMenuTitle(address)} />
      )}
      <ModalConnect isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </Box>
  );
}

export default ButtonConnect;
