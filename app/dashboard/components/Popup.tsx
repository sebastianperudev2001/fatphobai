import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

import { FaWeightScale } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { IoIosBody } from "react-icons/io";
import { GiMuscleUp, GiEating, GiCakeSlice } from "react-icons/gi";
import { RiBodyScanFill } from "react-icons/ri";

const StyledIcon = ({ Icon }: { Icon: React.ElementType }) => {
  const IconComponent = Icon; // Ensure Icon is treated as a component
  return (
    <IconComponent className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
  );
};
const valuesLogFields = [
  {
    label: "Weight",
    placeholder: "Enter your weight (kg)",
    icon: FaWeightScale,
    isRequired: true,
  },
  {
    label: "BMI",
    placeholder: "Enter your BMI",
    icon: IoIosBody,
    isRequired: true,
  },
  {
    label: "Body Fat",
    placeholder: "Enter your body fat %",
    icon: FaHamburger,
    isRequired: true,
  },
  {
    label: "Muscle Mass",
    placeholder: "Enter your muscle mass %",
    icon: GiMuscleUp,
    isRequired: true,
  },
  {
    label: "Resting Metabolism (RM)",
    placeholder: "Enter your RM",
    icon: GiEating,
    isRequired: false,
  },
  {
    label: "Body Age",
    placeholder: "Enter your body age",
    icon: RiBodyScanFill,
    isRequired: false,
  },
  {
    label: "Visceral Fat",
    placeholder: "Enter your visceral fat",
    icon: GiCakeSlice,
    isRequired: false,
  },
];

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
