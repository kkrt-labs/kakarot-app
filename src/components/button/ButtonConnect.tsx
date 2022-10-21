import { useAccount } from "@starknet-react/core";
import { useEffect, useState } from "react";

import { cropAddress } from "../../utils/address-utils";
import ModalConnect from "../layout/modal/ModalConnect";

import ButtonLink from "./ButtonLink";

function ButtonConnect() {
  const { address } = useAccount();
  const [isOpen, setOpen] = useState<boolean>(false);
  useEffect(() => {
    if (address) {
      setOpen(false);
    }
  }, [address]);
  return (
    <>
      {!address ? (
        <ButtonLink onClick={() => setOpen(true)} href="#">
          Connect
        </ButtonLink>
      ) : (
        <ButtonLink href="#">{cropAddress(address)}</ButtonLink>
      )}
      <ModalConnect isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  );
}

export default ButtonConnect;
