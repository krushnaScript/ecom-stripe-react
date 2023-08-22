import axios from "axios";
import React from "react";
import { url } from "../redux/slices/api";
import { useSelector } from "react-redux";

const PayButton = ({ cardItems }) => {
  const user = useSelector((state) => state.auth);
  const handleCheckout = () => {
    axios.post(`${url}/stripe/create-checkout-session`, {
      cardItems,
      userId: user._id,
      userEmail:user.email,
    }).then((resp)=>{
        if(resp.data.url){
            window.location.href= resp.data.url
        }
    }).catch((err)=>{
        console.log(err)
    });
};
console.log(user._id)
  return <button onClick={handleCheckout}>Check Out</button>;
};

export default PayButton;
