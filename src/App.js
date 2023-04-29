import { Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import './Components/globalStyles.css'
import Test from "./Components/Test";
import Amenity from "./Components/Amenity/Amenity";

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Amenity/*" element={<Amenity/>}/>
          <Route path="/text" element={<Test/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
