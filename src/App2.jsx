import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from "./Content";
import Fakepage from "./Fakepage"
import Paymentprocess from './Paymentprocess';
import Sbi from "./Sbi"

export default function App2() {
const [Visa , setVisa] = useState(false);
const [SBI  , setSBI] = useState(false)

  return(
      <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Content Visa={Visa} SBI={SBI} setSBI={setSBI} setVisa={setVisa} />} />  
              <Route path="/processing-payment" element={<Fakepage Visa={Visa} SBI={SBI} setSBI={setSBI} setVisa={setVisa} />} /> 
              <Route path="/payment" element={<Paymentprocess Visa={Visa} SBI={SBI} setSBI={setSBI} setVisa={setVisa} />} />
              <Route path="/payment-SBI" element={<Sbi />} />
          </Routes>
      </BrowserRouter>    
      </>
  );
}
