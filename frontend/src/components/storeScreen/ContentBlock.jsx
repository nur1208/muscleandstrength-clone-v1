import React from "react";

export const ContentBlock = ({ items }) => {
  return (
    <section id="content-block" className="transparent margin-bottom-none">
      <h2 className="blue-stripe">More On M&amp;S</h2>
      <div className="grid-x grid-margin-x">
        {items.map((item, index) => (
          <a
            href={item.link}
            className="cell small-12 bp740-6 large-3"
            key={index}
          >
            <div className="intrinsic-wrapper">
              <img
                alt="Workout Plans"
                className="cms-grid-image"
                src={item.image}
              />
            </div>
            <div className="info-block">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
