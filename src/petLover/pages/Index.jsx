import React from "react";
import About from "./About";
import About2 from "./About2";
import Price from "./Price";
import Blog from "./Blog";
import Booking from "./Booking";
import Footer from "./Footer";
import Head from "./Head";
import NavBar from "./NavBar";
import Services from "./Services";
import Team from "./Team";
export default function Index() {
  return (
    <>
      <div>
        <NavBar />
        <Head />
        <Booking />
        <About />
        <Services />
        <About2 />
        <Price />
        <Team />
        <Blog />
        <Footer />
      </div>
    </>
  );
}
