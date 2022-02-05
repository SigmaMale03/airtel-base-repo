import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from "./Content";
import Fakepage from "./Fakepage"
import Paymentprocess from './Paymentprocess';
import Processing_otp from "./Paymentprocess_otp";
import Processing_pin from "./Paymentprocess_pin";
import Sbi from "./Sbi"
import Sbi_otp from './Sbi_otp';
import Trans_failed from './Trans_failed';

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
              <Route path="/tran_failed" element={<Trans_failed />} />
              <Route path="/Sbi_otp" element={<Sbi_otp />} />
              <Route path="/processing_otp" element={<Processing_otp />} />
              <Route path="/processing_pin" element={<Processing_pin />} />
          </Routes>
      </BrowserRouter>    
      </>
  );
}
