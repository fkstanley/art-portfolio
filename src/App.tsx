import "./App.css";
import "@mantine/core/styles.css";
import image1 from "./assets/art/Aquaria.png";
import image2 from "./assets/art/Blind Spots.png";
import image3 from "./assets/art/Ecstasy of St Theresa .png";
import image4 from "./assets/art/Dirty-Dancing.png";
import image5 from "./assets/art/Donnie Darko.png";
import image6 from "./assets/art/Eye-Bruised.png";
import image7 from "./assets/art/Geometric-Hand.png";
import image8 from "./assets/art/Pulp Fiction.png";
import image9 from "./assets/art/Sergei Polunin.png";
import image10 from "./assets/art/Venus.png";
import image11 from "./assets/art/Geometric-Face.png";
import image12 from "./assets/art/Sam Morris.png";

import { Container, Grid, MantineProvider } from "@mantine/core";
import { Header } from "./components/Header";

function App() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];

  return (
    <MantineProvider>
      <Header />
      <Container my="md">
        <Grid>
          {images.map((image, index) => {
            return (
              <Grid.Col span={{ base: 12, xs: 4 }} key={index}>
                <img src={image} width={250} />
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
    </MantineProvider>
  );
}

export default App;
