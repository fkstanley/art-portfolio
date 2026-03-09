import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
