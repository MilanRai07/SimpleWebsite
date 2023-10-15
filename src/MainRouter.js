import React from "react";
import { Routes,Route} from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./0Home/Home";
import Football from "./1Football/Football";
import UFC from "./2UFC/UFC";
import Basketball from "./3BasketBall/Basketball";
import AboutLogin from "./5Login/AboutLogin";
import Contact from "./6Contact/Contact";
import Error from "./7Error/Error";
import SinglePage from "./8InfoPage/SinglePage";
import About from "./4AboutUS/AboutUs";
import OtherIndex from "./9OtherNews/OtherIndex";
const MainRouter=()=>{
    return(
        <>
        <Routes>
            <Route path='/' element={<NavBar/>}>
                  <Route index element={<Home/>}/>
                  <Route path='football/*' element={<Football/>}/>
                  <Route path='football/singlepage/:Fkey' element={<SinglePage/>}/>
                  <Route path='ufc/*' element={<UFC/>}/>
                  <Route path='ufc/singlepage/:Fkey' element={<SinglePage/>}/>
                  <Route path='basketball/*' element={<Basketball/>}/>
                  <Route path='basketball/singlepage/:Fkey' element={<SinglePage/>}/>
                  <Route path='login/*' element={<AboutLogin/>}/>
                  <Route path='contact/*' element={<Contact/>}/>
                  <Route path='aboutus/*' element={<About/>}/>
                  <Route path='othernews/*' element={<OtherIndex/>}></Route>
                  <Route path='*' element={<Error/>}/>
                  <Route path="singlepage/:FSport/:Fkey/*" element={<SinglePage/>}/>
            </Route>
        </Routes>
        </>
    )
    }
    export default MainRouter;