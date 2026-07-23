import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import DiamondProducts from "./pages/DiamondProducts";
import LaserProducts from "./pages/LaserProducts";
import GranitePolishingBuff from "./pages/GranitePolishingBuff";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Products from "./components/home/Products";
import Solutions from "./components/home/Solutions";
import Contact from "./components/home/Contact";
import Footer from "./components/layout/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
      <Solutions />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/diamond-products"
          element={<DiamondProducts />}
        />

        <Route
          path="/laser-products"
          element={<LaserProducts />}
        />

        <Route
          path="/granite-polishing-buff"
          element={<GranitePolishingBuff />}
        />
      </Routes>
    </>
  );
}

export default App;