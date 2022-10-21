import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface Props {
  title: string;
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
}
function Modal({ title, children, isOpen, onClose }: Props) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="2xl">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}

export default Modal;
