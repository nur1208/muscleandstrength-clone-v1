import React, { useEffect, useState } from "react";

export const CustomSelect = ({
  favors,
  items,
  maxH,
  getSelectIndex,
  stopSelected,
}) => {
  const [sodList, setSodList] = useState("sod_list");
  const [sodListWrapper, setSodListWrapper] = useState("sod_list_wrapper");
  const [favor, setFavor] = useState([]);

  const createFavors = () => {
    let favor = [];
    items.forEach(() => {
      if (favor.length === 0) favor.push("sod_option  selected");
      else favor.push("sod_option");
    });

    setFavor(favor);
  };

  useEffect(() => {
    createFavors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [selected, setSelected] = useState({
    index: 0,
    value: items[0].title,
  });

  const handleSelect = () => {
    setSodList(sodList === "sod_list" ? "sod_list focus open" : "sod_list");
    setSodListWrapper(
      sodListWrapper === "sod_list_wrapper"
        ? "sod_list_wrapper open"
        : "sod_list_wrapper"
    );
    addClass(selected.index);

    if (getSelectIndex) {
      getSelectIndex(selected.index);
    }
  };

  const addClass = (index, style, v) => {
    if (!style) {
      style = "active";
    }
    const newFavor = favor.map((item, i) => {
      if (!(index === i) && item.includes(style)) {
        item =
          item.substring(0, item.indexOf(style)) +
          item.substring(item.indexOf(style) + style.length);
      } else if (index === i) {
        item = item + " " + style;
        if (style === "selected") {
          if (!stopSelected) setSelected({ index: i, value: v });
        }
      }
      return item;
    });

    setFavor(newFavor);
  };

  return (
    <span
      className="sod_select "
      tabIndex="0"
      data-cycle="false"
      data-links="false"
      data-links-external="false"
      data-placeholder-option="false"
      data-filter=""
      onClick={handleSelect}
    >
      <span className="sod_label">{selected.value}</span>
      <span className={sodListWrapper}>
        <span className={sodList} style={{ maxHeight: maxH && 206 }}>
          {items.map((item, index) =>
            item.isDisabled ? (
              <span className={favor[index]} title="" data-value="" key={index}>
                <br />
                <label>Out of Stock</label>
              </span>
            ) : (
              <span
                key={index}
                className={favor[index]}
                title={item.title}
                data-value={item.value}
                onMouseOver={() => addClass(index)}
                onMouseDown={() => addClass(index, "selected", item.title)}
                onClick={() => getSelectIndex && getSelectIndex(index)}
              >
                {item.title}
              </span>
            )
          )}
        </span>
      </span>
      <select className="select_on flavor_picker">
        {items.map((item, index) =>
          item.isDisabled ? (
            <option
              value
              disabled
              data-option-label="Out of Stock"
              key={index}
            ></option>
          ) : (
            <option value={item.value} key={index}>
              {item.title}
            </option>
          )
        )}
        {/* <option value="-1">Pick a Flavor</option>
        <option value="20452">Pineapple Shred</option>
        <option value="20453">Razor Lime</option>
        <option value="36412">Blue Raspberry</option>
        <option value="36421">Raspberry Lemonade</option>
        <option value="" disabled="" data-option-label="Out of Stock"></option> */}
      </select>
    </span>
  );
};
