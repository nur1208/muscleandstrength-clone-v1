import React, { useState } from "react";
import { CustomSelect } from "./CustomSelect";

export const Group = ({
  price,
  point,
  title,
  servingInfo,
  deal,
  favors,
  items,
  beforeDiscount,
}) => {
  const [qyt, setQyt] = useState(0);
  return (
    <div className="group">
      <div className="group-header">
        <div className="cost">
          {beforeDiscount && (
            <div className="before-discount">
              <span className="price">€{beforeDiscount}</span>{" "}
            </div>
          )}

          <span className="calc">
            <span className="regular-price" id="product-price-20452">
              <span className="price">€{price}</span>{" "}
            </span>
            <span className="points-per-unit">{point}</span>
          </span>
        </div>
        <div className="title">{title}</div>
        <div className="serving-info">{servingInfo}</div>
        {deal && (
          <div className="deal">
            <span className="mns-label lbl-deal">{deal}</span>
          </div>
        )}
        <div className="fields">
          <div className="row">
            <div className="option-field field">
              <CustomSelect favors={favors} items={items} />
            </div>
            <div className="qty-field field">
              <div className="input-group">
                <div
                  className="minus increment"
                  onClick={() => setQyt(qyt > 0 ? qyt - 1 : qyt)}
                >
                  –
                </div>
                <input
                  name="super_group[36421]"
                  className="number"
                  type="text"
                  value={qyt}
                  min="0"
                  max="20"
                  onChange={
                    (e) =>
                      setQyt(
                        e.target.value > 0 && e.target.value < 20
                          ? Number(e.target.value)
                          : qyt
                      )
                    // setQyt(e.target.value)
                  }
                />
                <div
                  className="add increment"
                  onClick={() => setQyt(qyt < 20 ? qyt + 1 : qyt)}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
