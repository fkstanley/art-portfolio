import { MantineProvider, createTheme } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";

const theme = createTheme({
  fontFamily: "Gowun Dodum, sans-serif",
  headings: {
    fontFamily: "Gowun Dodum, sans-serif",
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
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
}

export default App;
