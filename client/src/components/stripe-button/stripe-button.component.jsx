import React from "react";
import "./stripe-button.styles.scss";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51JAuvnSDen84QJxZ1lAK8ibpLywIoeTb38vOQW2379AN7gQk9wpup0vrfxmhseZW7SnJVVyIXniJQ1g0DQDAoRtf0078HiUY8R";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "POST",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment successful!");
      })
      .catch((error) => {
        console.log("Payment error: ", error);
        alert("Payment failed");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      //   image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
