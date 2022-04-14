import React,{useEffect} from "react";
import {BrowserRouter ,Routes , Route}  from "react-router-dom"
import MainHome from "./Pages/MainHome";
import SubAbout from "./Pages/SubAbout";
import SubPrivacy from './Pages/SubPrivacy';
import SubTerms from './Pages/SubTerms';
import SubRates from './Pages/SubRates';
import SubRefund from './Pages/SubRefund';
import SubComplaint from "./Pages/SubComplaint";
import AOS from "aos";
import "aos/dist/aos.css";



function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path={'/'} element={<MainHome />}/>
       <Route path={'/about'} element={<SubAbout />} />
       <Route path={'/privacy'} element={<SubPrivacy />}/>
       <Route path={'/terms'} element={<SubTerms />} />
       <Route path={'/rates'} element={<SubRates/>} /> 
       <Route path={'/refund'} element={<SubRefund />} />
       <Route path={'/complaint'} element={<SubComplaint />} />
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
