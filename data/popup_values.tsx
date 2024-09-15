import { FaWeightScale } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";
import { IoIosBody } from "react-icons/io";
import { GiMuscleUp, GiEating, GiCakeSlice } from "react-icons/gi";
import { RiBodyScanFill } from "react-icons/ri";

export const valuesLogFields = [
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
