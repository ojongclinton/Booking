import { Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
