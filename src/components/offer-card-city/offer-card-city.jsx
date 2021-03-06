import React from "react";
import OfferCard from "../offer-card/offer-card";

const MainCard = (props) => {
  return (
    <OfferCard className="cities__place-card" block="cities" imgWidth="260" imgHeight="200" {...props}/>
  );
};

export default MainCard;
