import React from "react";
import { useMediaQuery } from "react-responsive";

export const MerchBanner = ({ idBanner, link, image, imagePhone }) => {
  const isPhone = useMediaQuery({ minWidth: 740 });

  return (
    <section id={idBanner}>
      <a href={link}>
        {isPhone ? (
          <img
            className=" ls-is-cached lazyloaded"
            data-src="/images/primeval_banner_desktop.jpg"
            src={image}
            alt="primeval_banner_desktop.jpg"
          />
        ) : (
          <img
            className=" ls-is-cached lazyloaded"
            data-src="/images/primeval_banner_desktop.jpg"
            src={imagePhone}
            alt="primeval_banner_phone.jpg"
          />
        )}
      </a>
    </section>
  );
};
