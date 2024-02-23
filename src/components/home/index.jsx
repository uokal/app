import ContextProvider from "@/src/context/ContextProvider";
import React from "react";
import HeroArea from "./hero-area";
// import AnimateMouse from "./AnimateMouse";
import Header from "../../layout/headers";
import Footer from "../../layout/footers";
import About from "./about";
import Gallery from "./gallery";
import Promo from "./promo";

const Home = () => {
  return (
    <ContextProvider>
      {/* <AnimateMouse /> */}
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroArea />
            <About />
            <Gallery />

            <Promo />
          </main>
          <Footer bg_style={false} />
        </div>
      </div>
    </ContextProvider>
  );
};

export default Home;
