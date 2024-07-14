import React, { useState } from "react";
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
import Admin from "./Admin/js/admin.js";
import LoginAdmin from "./Admin/js/login.js";
import AddAdmin from "./Admin/js/add.js";
import AdminClassesApproval from "./Admin/js/classesApproval.js";
import AdminClassesDetails from "./Admin/js/classesDetails.js";
import UserAdmin from "./Admin/js/user.js";
import UpdateClassesAdmin from "./Admin/js/classesUpdate";
import UpdateUserAdmin from "./Admin/js/userUpdate.js";
import UpdateAdmin from "./Admin/js/update.js";
import DashboardAdmin from "./Admin/js/dashboard.js";

export default function App() {
  const [isLoggedInAdmin, setIsLoggedInAdmin] = useState(false)
  function handleLogin(value) {
    setIsLoggedInAdmin(value)
  }
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
        <Route exact path="/loginAdmin" element={<LoginAdmin handleLogin={handleLogin} />}></Route>
        {isLoggedInAdmin === true &&
          <>
            <Route exact path="/dashboard" element={<DashboardAdmin />}></Route>
            <Route exact path="/admin" element={<Admin />}></Route>
            <Route exact path="/classesApproval" element={<AdminClassesApproval />}></Route>
            <Route exact path="/classes" element={<AdminClassesDetails />}></Route>
            <Route exact path="/addAdmin" element={<AddAdmin />}></Route>
            <Route exact path="/updateAdmin" element={<UpdateAdmin />}></Route>
            <Route exact path="/user" element={<UserAdmin />}></Route>updateClasses
            <Route exact path="/updateClasses" element={<UpdateClassesAdmin />}></Route>
            <Route exact path="/updateUser" element={<UpdateUserAdmin />}></Route>
          </>
        }
      </Routes>
    </Router>
  );
}