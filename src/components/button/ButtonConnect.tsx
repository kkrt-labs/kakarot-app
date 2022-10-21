import { Text } from "@chakra-ui/react";
import { useAccount } from "@starknet-react/core";
import { useState } from "react";

import { cropAddress } from "../../utils/address-utils";
import ModalConnect from "../layout/modal/ModalConnect";

import ButtonLink from "./ButtonLink";

function ButtonConnect() {
  const { address } = useAccount();
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      {!address ? (
        <ButtonLink onClick={() => setOpen(true)} href="#">
          Connect
        </ButtonLink>
      ) : (
        <Text>{cropAddress(address)}</Text>
      )}
      <ModalConnect isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  );
}

export default ButtonConnect;
