import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGeners from "../hooks/useGeners";
import getCroppedImgUrl from "../Services/image-url";

const GenerList = () => {
  const { data, isLoding, error } = useGeners();
  if (error) return null;
  if (isLoding) return <Spinner />;
  return (
    <List>
      {data.map((gener) => (
        <ListItem key={gener.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImgUrl(gener.image_background)}
            />
            <Text fontSize={"lg"}>{gener.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenerList;
