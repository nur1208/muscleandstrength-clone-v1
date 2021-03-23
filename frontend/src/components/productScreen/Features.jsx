import React from "react";

export const Features = ({ items }) => {
  return (
    <div className="features-list-wrap">
      <ul className="features-list">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              data-featherlight="#features-list-rewards"
              data-featherlight-variant="fancy"
            >
              <span className="inner-icon">
                {item.icon ? (
                  item.icon
                ) : (
                  <img src={item.image} alt="mns-rewards.png" />
                )}
              </span>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
