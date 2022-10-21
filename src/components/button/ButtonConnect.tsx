import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";

import { cropAddress } from "../../utils/address-utils";
import Menu from "../layout/menu/Menu";
import ModalConnect from "../layout/modal/ModalConnect";

import ButtonLink from "./ButtonLink";

function ButtonConnect() {
  const { address } = useAccount();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  // Close the modal once account connected
  useEffect(() => {
    if (address) {
      setModalOpen(false);
    }
  }, [address]);
  return (
    <>
      {!address ? (
        <ButtonLink onClick={() => setModalOpen(true)}>Connect</ButtonLink>
      ) : (
        <Menu title={cropAddress(address)} />
      )}
      <ModalConnect isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default ButtonConnect;
