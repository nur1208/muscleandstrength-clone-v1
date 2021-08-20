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
  servings,
  perServingPrice,
  isAddBtnClicked,
}) => {
  const [selectedFIndex, setSelectedFIndex] = useState(0);
  const [qty, setQyt] = useState(0);
  const [selected, setSelected] = useState({
    index: 0,
    value: items[0].title,
  });

  useEffect(() => {
    // set qty to one when the user select a flavor and qty
    // equals = 0 otherwise set it the the value the user
    // selected
    const newQty = qty === 0 ? 1 : qty;
    if (selectedFIndex !== 0 && qty !== 0)
      setFavors &&
        setFavors({
          ...items[selectedFIndex],
          quantity: newQty, // for the cart
        });
    //if the user select a flavor than set the qty to 0 the let the user select flavor again.
    else if (selectedFIndex !== 0 && qty === 0) {
      setSelected({
        index: 0,
        value: items[0].title,
      });
    } else {
      setQyt(0);
      setFavors && setFavors(null);
    }
  }, [selectedFIndex, items, setFavors, qty]);

  const customSelectProps = {
    selected,
    setSelected,
  };

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
            <span
              className="regular-price"
              id="product-price-20452"
            >
              <span className="price">€{price}</span>{" "}
            </span>
            <span className="points-per-unit">{point}</span>
          </span>
        </div>
        <div className="title">{title}</div>
        <div className="serving-info">
          {servingInfo ||
            `${servings} Servings | €${perServingPrice} Per Serving`}
        </div>
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
                setSelectedFIndex={
                  setFavors && setSelectedFIndex
                }
                items={items}
                setQyt={setQyt}
                qty={qty}
                isAddBtnClicked={
                  isAddBtnClicked && isAddBtnClicked
                }
                {...customSelectProps}
              />
            </div>
            <div className="qty-field field">
              <div className="input-group">
                <div
                  className="minus increment"
                  onClick={() =>
                    // this "(selectedFIndex === 0 ? 0 : 1)" for
                    // "don't let the user show less than one if he/she selected favor"
                    setQyt(
                      // if the user select flavor don't let him/
                      // her select qty as 0
                      // qty > (selectedFIndex === 0 ? 0 : 1)
                      qty > 0 ? qty - 1 : qty
                      // qty > 0 ? qty - 1 : qty
                    )
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
                  onClick={() =>
                    setQyt(qty < 20 ? qty + 1 : qty)
                  }
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
