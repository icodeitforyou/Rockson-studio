import React from "react";
import img from "../media/bannerimg.jpg";

function Header() {
  return (
    <section className="hero_banner_wrapper">
      <div className="hero_banner_container">
        <div className="hero_banner_grid">
          <div className="hero_banner_image">
            <img src={img} alt="BannerImage" />
          </div>
          <div className="hero_banner_content">
            <div className="container">
              <h1 class="hero_banner_title">
                Wallien — The only thing between a woman and the water
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
