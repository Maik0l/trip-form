import React from "react";
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function UserModal({ name, email, isOpen, onClose }) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Tudo pronto!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Olá, {name}! Em breve você receberá no email {email} informações
              mais detalhadas sobre a sua viagem. Desejamos a você uma ótima
              viagem e a melhor das experiências conosco!
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Entendi!</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default UserModal;
