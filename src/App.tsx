import { Grid, GridItem, Show, Flex, Box } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenerList from "./Components/GenerList";
import { useState } from "react";
import { Genre } from "./hooks/useGeners";
import PlatformSelected from "./Components/PlatformSelected";
import { Platform } from "./hooks/useGames";
import SortSelecter from "./Components/SortSelecter";
import GameHeading from "./Components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: string;
  searchValue: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav "" main"`,
        lg: `"nav nav""aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchValue) =>
            setGameQuery({ ...gameQuery, searchValue })
          }
        />
      </GridItem>
      <Show>
        <GridItem area={"aside"} paddingX={5}>
          <GenerList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <GameHeading gameQuery={gameQuery} />
        <Flex paddingLeft={10}>
          <Box marginRight={5}>
            <PlatformSelected
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <SortSelecter
            sortOrder={gameQuery.order}
            onSelcetSortOrder={(order) => setGameQuery({ ...gameQuery, order })}
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
