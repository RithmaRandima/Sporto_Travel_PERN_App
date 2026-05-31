import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Packages from "./pages/Packages";
import Destinations from "./pages/Destinations";
import Blog from "./pages/Blog";
import About from "./pages/About";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
