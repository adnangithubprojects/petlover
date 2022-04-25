import "./App.css";
import Index from "./petLover/pages/Index";
import { Route, Routes } from "react-router-dom";
import About from "./petLover/pages/About";
import About2 from "./petLover/pages/About2";
import Team from "./petLover/pages/Team";
import Services from "./petLover/pages/Services";
import Price from "./petLover/pages/Price";
import Booking from "./petLover/pages/About2";
import NavBar from "./petLover/pages/NavBar";
import Footer from "./petLover/pages/Footer";
import Contact from "./petLover/pages/Contact";
import Blog from "./petLover/pages/Blog";
import BlogDetails from "./petLover/pages/BlogDetails";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/about"
          element={
            <>
              <NavBar />
              <About />
              <About2 />
              <Team />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <NavBar />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/price"
          element={
            <>
              <NavBar />
              <Price />
              <Booking />
              <Footer />
            </>
          }
        />
        <Route
          path="/booking"
          element={
            <>
              <NavBar />
              <Booking />
              <Price />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <NavBar />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <NavBar />
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="/blogdetail"
          element={
            <>
              <NavBar />
              <BlogDetails />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
