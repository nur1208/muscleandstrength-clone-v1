import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ColorExtractor } from "react-color-extractor";

export const Region = () => {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const [colors, setColors] = useState("");

  return (
    <div className="region region-sitewide-banner">
      <div id="block-block-12" className="block block-block">
        <div className="content">
          <a
            href="/store/landing/dec4doorbusters"
            className="sale-banner"
            style={{ backgroundColor: colors[0] }}
          >
            {isMobile ? (
              <img src="/images/mobile_2.jpg" alt="" />
            ) : (
              <ColorExtractor getColors={(colors) => setColors(colors)}>
                <img src="/images/desktop_2.jpg" alt="" />
              </ColorExtractor>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};
