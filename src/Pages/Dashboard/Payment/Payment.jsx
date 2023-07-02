import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PK);

const Payment = () => {
  const [selectedClasses, setSelectedClass] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://server-omega-two.vercel.app/selectedclasses`)
      .then((response) => {
        // Handle successful response
        const data = response.data;
        const filteredData = data.filter(
          (cls) => cls?.selectorEmail === user?.email
        );
        setSelectedClass(filteredData);
      })
      .catch((error) => {});
  }, []);

  const total = selectedClasses.reduce(
    (total, sClass) => parseFloat(sClass?.price) + total,
    0
  );

  const price = parseFloat(total.toFixed(2));

  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={selectedClasses} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
