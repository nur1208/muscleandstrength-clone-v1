import React from "react";

export const Brands = ({ items }) => {
  return (
    <section id="top-brands" className="top-brands-block">
      <h2 className="grey-stripe">Top Brands</h2>
      <ul className="top-brand-list grid-x grid-margin-x">
        {items.map((item, index) => (
          <li className="cell small-6 bp740-4 large-3" key={index}>
            <div className="manufacturer_box vmiddle">
              <a href={item.link}>
                <img src={item.image} alt="53.jpg" />
              </a>
              <br />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
