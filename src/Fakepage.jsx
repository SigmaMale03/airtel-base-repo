import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Fakepage = ({Visa , SBI}) => {
    //  Visa={Visa} SBI={SBI} setSBI={setSBI} setVisa={setVisa}
   let navigate = useNavigate()
    useEffect(() => {
     setTimeout(() => {
     if(Visa){
        navigate(`/payment`)
     }else if(SBI){
        navigate(`/payment-SBI`)
     }   
     }, 2000)
    },[])

    return (
        <>
            <div className="fake_page">
                <div className="fake_box">
                    <div className="fake_para">
                        <p>your payment request is being Proceed...</p>
                    </div>
                    <div className="fake_list">
                        <ol className="list_item">
                            <li>
                                <p>this is a secure payment gatway using 128 bit SSl encryption</p>
                            </li>
                            <li>
                                <p>
                                    when you submit the transaction, the server will take about 1 to 5 seconds to<br> 
                                    </br> Procees, but it may take longer at certain times
                                </p>
                            </li>
                            <li>
                                <p>please do not press submit button once again or the back or refresh buttons.</p>
                            </li>
                        </ol>
                        <div className="list_copy">
                            <a href="#">
                            <p className="copy_link">Www.Billdesk.com</p>
                            </a>
                            <p>&copy;2004 IndiaIdeas.Com Ltd</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
};

export default Fakepage;