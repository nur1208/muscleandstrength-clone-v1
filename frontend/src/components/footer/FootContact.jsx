import React from "react";

export const FootContact = ({
  title,
  itemTypeValue,
  itemName,
  address: {
    streetAddress,
    addressLocality,
    addressRegion,
    postalCode,
    phone,
    emailHref,
  },
}) => {
  return (
    <div className="foot-contact">
      <h3>{title}</h3>
      <p itemScope="" itemType={itemTypeValue}>
        <span itemProp="name">{itemName}</span>
        <br />
        <span
          itemProp="address"
          itemScope=""
          itemType="http://schema.org/PostalAddress"
        >
          <span itemProp="streetAddress">{streetAddress}</span>
          <br />
          <span itemProp="addressLocality">{addressLocality}</span>,{" "}
          <span itemProp="addressRegion">{addressRegion}</span>{" "}
          <span itemProp="postalCode">{postalCode}</span>
          <br />
          PH:{" "}
          <span itemProp="telephone" className="number-font">
            {phone}
          </span>
          <br />
          Email:{" "}
          <a rel="nofollow" href={emailHref}>
            click here
          </a>
        </span>
      </p>
    </div>
  );
};
