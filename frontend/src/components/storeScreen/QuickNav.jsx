import React from "react";

export const QuickNav = () => {
  return (
    <section id="quick-nav">
      <div id="quick-links-carousel" className="css-carousel">
        <div className="css-carousel-container">
          <a href="/store/promos.html" className="quick-link-container slide">
            <span className="icon specials"></span>
            <div className="quick-link-title">Deals &amp; Coupons</div>
          </a>
          <a href="/store/category.html" className="quick-link-container slide">
            <span className="icon categories"></span>
            <div className="quick-link-title">Shop By Category</div>
          </a>
          <a href="/store/brands" className="quick-link-container slide">
            <span className="icon brands"></span>
            <div className="quick-link-title">Shop By Brand</div>
          </a>
          <a href="/store/top-sellers" className="quick-link-container slide">
            <span className="icon top-fifty"></span>
            <div className="quick-link-title">Top 50 Products</div>
          </a>
          <a
            href="/store/category/clearance.html"
            className="quick-link-container slide"
          >
            <span className="icon clearance"></span>
            <div className="quick-link-title">Clearance</div>
          </a>
          <a
            href="/store/rewards/catalog"
            className="quick-link-container slide"
          >
            <span className="rewards-catalog"></span>
            <div className="quick-link-title">Rewards Catalog</div>
          </a>
        </div>
      </div>
    </section>
  );
};
