import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { FaWindows, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiPlaystation3 } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstion: SiPlaystation3,
    xbox: FaXbox,
    nitnendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={"10px"}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
