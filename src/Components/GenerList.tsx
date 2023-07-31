import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGeners, { Genre } from "../hooks/useGeners";
import getCroppedImgUrl from "../Services/image-url";

interface Props {
  onSelectedGenre: (gener: Genre) => void;
  selectedGenre: Genre | null;
}

const GenerList = ({ onSelectedGenre, selectedGenre }: Props) => {
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
            <Button
              onClick={() => onSelectedGenre(gener)}
              fontSize={"lg"}
              variant={"link"}
              fontWeight={gener.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {gener.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenerList;
