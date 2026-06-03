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
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { useAppContext } from "./context/AppContext";
import TripDetails from "./pages/TripDetails";
import { Toaster } from "react-hot-toast";
const App = () => {
  const { showLogin } = useAppContext();

  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Navbar />

        {showLogin && <LoginPopup />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/trips/:id" element={<TripDetails />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      <Toaster />
    </div>
  );
};

export default App;
