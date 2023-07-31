import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenerList from "./Components/GenerList";
import { useState } from "react";
import { Genre } from "./hooks/useGeners";
import PlatformSelected from "./Components/PlatformSelected";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <NavBar />
      </GridItem>
      <Show>
        <GridItem area={"aside"} paddingX={5}>
          <GenerList
            selectedGenre={selectedGenre}
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <PlatformSelected />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
