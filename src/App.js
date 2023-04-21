import { Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import './Components/globalStyles.css'
import Test from "./Components/Test";

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/text" element={<Test/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
