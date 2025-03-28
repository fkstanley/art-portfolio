import { MantineProvider } from "@mantine/core";
import "./App.css";
import "@mantine/core/styles.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <MantineProvider>
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
