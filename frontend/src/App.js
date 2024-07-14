import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./MainPage/mainpage.js";
import Salsa from "./MainPage/components/salsa.js";
import HipHop from "./MainPage/components/hiphop.js";
import Ballet from "./MainPage/components/ballet.js";
import Baking from "./MainPage/components/baking.js";
import HealthyCooking from "./MainPage/components/healthyCooking.js";
import KidsCooking from "./MainPage/components/kidsCooking.js";
import Pilates from "./MainPage/components/pilates.js";
import Zumba from "./MainPage/components/zumba.js";
import Aerobics from "./MainPage/components/aerobics.js";
import Hiking from "./MainPage/components/hiking.js";
import RockClimbing from "./MainPage/components/rockClimbing.js";
import HorseRiding from "./MainPage/components/horseRiding.js";
import Cricket from "./MainPage/components/cricket.js";
import Football from "./MainPage/components/football.js";
import Soccer from "./MainPage/components/soccer.js";
import Painting from "./MainPage/components/painting.js";
import Knitting from "./MainPage/components/knitting.js";
import Pottery from "./MainPage/components/pottery.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route exact path="/salsa" element={<Salsa />}></Route>
        <Route exact path="/hip-hop" element={<HipHop />}></Route>
        <Route exact path="/ballet" element={<Ballet />}></Route>
        <Route exact path="/baking" element={<Baking />}></Route>
        <Route exact path="/healthy-cooking" element={<HealthyCooking />}></Route>
        <Route exact path="/kids-cooking" element={<KidsCooking />}></Route>
        <Route exact path="/zumba" element={<Zumba />}></Route>
        <Route exact path="/aerobics" element={<Aerobics />}></Route>
        <Route exact path="/pilates" element={<Pilates />}></Route>
        <Route exact path="/hiking" element={<Hiking />}></Route>
        <Route exact path="/rock-climbing" element={<RockClimbing />}></Route>
        <Route exact path="/horse-riding" element={<HorseRiding />}></Route>
        <Route exact path="/cricket" element={<Cricket />}></Route>
        <Route exact path="/football" element={<Football />}></Route>
        <Route exact path="/soccer" element={<Soccer />}></Route>
        <Route exact path="/painting" element={<Painting />}></Route>
        <Route exact path="/knitting" element={<Knitting />}></Route>
        <Route exact path="/pottery" element={<Pottery />}></Route>
      </Routes>
    </Router>
  );
}