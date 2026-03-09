import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";

const theme = createTheme({
  fontFamily: "'Karla', system-ui, sans-serif",
  headings: {
    fontFamily: "'Cormorant Garamond', Georgia, serif",
  },
  colors: {
    dark: [
      "#ede8e2",
      "#9a938b",
      "#5a554f",
      "#3a3632",
      "#2a2725",
      "#1a1918",
      "#141413",
      "#111110",
      "#0d0d0c",
      "#0a0a0a",
    ],
  },
  primaryColor: "dark",
});

export const App = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
};
