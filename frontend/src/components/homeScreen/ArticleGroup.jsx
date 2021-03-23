import React from "react";

export const ArticleGroup = ({ title, innerLink, items }) => {
  return (
    <div className="article-group clearfix">
      <h2 className="hstyle-two">
        {title}{" "}
        <a href={innerLink.hrefV} className="inner-link">
          {innerLink.title}
        </a>
      </h2>
      <div className="content-grid-3up">
        <div className="view view-most-viewed-content-by-type view-id-most_viewed_content_by_type view-display-id-views view-dom-id-3530953f02561a8bb38dfa859196179a">
          <div className="view-content">
            {items.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="inner-wrap">
                    <a href={item.hrefV} alt={item.title} title={item.title}>
                      <div className="nodeImgWrap">
                        <div className="nodeImg acenter">
                          <img
                            className=" lazyloaded"
                            width="400"
                            height="250"
                            alt={item.imageAlt || item.title}
                            src={item.image}
                          />{" "}
                        </div>
                      </div>
                      <div className="nodeData">
                        <div className="nodeTitle">{item.title} </div>
                        <div className="nodeSumm">{item.summary} </div>
                      </div>
                    </a>
                    <div className="stats-wrap">
                      <div className="stats">{item.comments} Comments </div>
                      <div className="stats-left">{item.reads} Reads</div>
                    </div>
                    <span style={{ display: "block", clear: "both" }}></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
