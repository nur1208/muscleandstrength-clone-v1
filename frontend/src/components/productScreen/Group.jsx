import React, { useEffect, useState } from "react";
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
  setFavors,
}) => {
  const [selectedFIndex, setSelectedFIndex] = useState(0);
  const [qty, setQyt] = useState(0);

  useEffect(() => {
    const newQty = qty === 0 ? 1 : qty;
    if (selectedFIndex !== 0)
      setFavors && setFavors({ ...items[selectedFIndex], quantity: newQty });
    else setFavors && setFavors(null);
  }, [selectedFIndex, items, setFavors, qty]);

  useEffect(() => {}, []);
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
              <CustomSelect
                favors={favors}
                setSelectedFIndex={setFavors && setSelectedFIndex}
                items={items}
                setQyt={setQyt}
                qty={qty}
              />
            </div>
            <div className="qty-field field">
              <div className="input-group">
                <div
                  className="minus increment"
                  onClick={() =>
                    // this "(selectedFIndex === 0 ? 0 : 1)" for
                    // "don't let the user show less than one if he/she selected favor"
                    setQyt(qty > (selectedFIndex === 0 ? 0 : 1) ? qty - 1 : qty)
                  }
                >
                  –
                </div>
                <input
                  name="super_group[36421]"
                  className="number"
                  type="text"
                  value={qty}
                  min="0"
                  max="20"
                  onChange={
                    (e) =>
                      setQyt(
                        e.target.value > 0 && e.target.value < 20
                          ? Number(e.target.value)
                          : qty
                      )
                    // setQyt(e.target.value)
                  }
                />
                <div
                  className="add increment"
                  onClick={() => setQyt(qty < 20 ? qty + 1 : qty)}
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
