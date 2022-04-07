import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import PageMovie from "./assets/pages/PageMovie";
import Home from "./assets/pages/Home";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
        <Route path ="/pagemovie" element={<PageMovie/>}/>
      </Routes>
    </Router>
  );
}

export default App;
