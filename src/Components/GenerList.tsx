import {
  Button,
  HStack,
  Heading,
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
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((gener) => (
          <ListItem key={gener.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImgUrl(gener.image_background)}
              />
              <Button
                onClick={() => onSelectedGenre(gener)}
                fontSize={"lg"}
                variant={"link"}
                fontWeight={gener.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {gener.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenerList;
