import React, { useEffect, useState } from 'react'
import ActiveVideo from '../Components/Active/ActiveVideo';
import Navbar from '../Components/Navbar/Navbar'
import Back_Image from '../Components/Background/Back_Image';
import About from '../Components/About/About';
import MagicCircle from '../Components/MagicCircle/MagicCircle';
import Service1 from '../Components/Service/Service1';
import Subscribe from '../Components/Subsribe/Subscribe';
import GetApp from '../Components/GetApp/GetApp';
import Review from '../Components/Review/Review';
import WhyChoose from '../Components/WhyChoose/WhyChoose';
import Table from '../Components/Table/Table';
import MoneyQR from '../Components/MoneyQR/MoneyQR';
import ContactUs from '../Components/ContactUs/ContactUs';
import PartnerCompany from '../Components/Partner/PartnerCompany';
import Footer from '../Components/Footer/Footer';
import Customer from "../Components/Customer/Customer";
import ModelBox from '../Components/Model/ModelBox';

const MainHome = () => {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, [])

  //console.log(showModal);
  

  return (
    <>
      <Navbar />
      <Back_Image />
      <About />
      <MagicCircle />
      <Service1 />
      <Review />
      <WhyChoose />
      <Table />
      <Customer />
      <Subscribe/>
      <MoneyQR />
      <ActiveVideo />
      <GetApp />
      <ContactUs />
      <PartnerCompany />
      <Footer />
      <ModelBox setShowModal={setShowModal} showModal={showModal}/>
    </>
  )
}


export default MainHome;
