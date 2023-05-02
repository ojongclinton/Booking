import { Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import './Components/globalStyles.css'
import Test from "./Components/Test";
import Amenity from "./Components/Amenity/Amenity";
import React,{useEffect,useState} from "react";
import LoadingScreen from "./Components/SingleItems/Loading/LoadingScreen";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  return (
    <div className="App">
      {isLoading?(
        <div style={{position:"relative"}}>
          <LoadingScreen />
        </div>
      ):(
 <div>
<Header />
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Amenity/*" element={<Amenity/>}/>
    <Route path="/text" element={<Test/>}/>
  </Routes>
<Footer/>
</div> 
      )}
    </div>
  );
}

export default App;

