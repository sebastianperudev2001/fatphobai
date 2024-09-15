import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { valuesLogFields } from "@/data/popup_values";

const StyledIcon = ({ Icon }: { Icon: React.ElementType }) => {
  const IconComponent = Icon; // Ensure Icon is treated as a component
  return (
    <IconComponent className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
  );
};

const Popup = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Log now!
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center ">
                Daily Checkup 💪
              </ModalHeader>
              <ModalBody>
                {valuesLogFields.map((field, index) => (
                  <Input
                    key={index}
                    endContent={field.icon && <StyledIcon Icon={field.icon} />}
                    label={field.label}
                    placeholder={field.placeholder}
                    variant="bordered"
                    isRequired={field.isRequired}
                  />
                ))}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Register data
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Popup;
