import React from "react";

function AboutCase() {
  return (
    <section className="about_case_wrapper">
      <div className="container">
        <div className="about_case_grid">
          <div className="about_case_left">
            <h2 className="about_case_heading">About</h2>
            <div className="about_case_subtext">
              <p>Wallien leads the way in women's waterwear, blending innovation with sustainability. Crafted by women, for women, their suits promise unbeatable warmth, durability, and freedom of movement.</p>
            </div>
            <a className="about_case_btn" href="#">Visit website</a>
          </div>
          <div className="about_case_right">
            <div className="about_case_services">
              <h3 className="about_case_right_heading">Services</h3>
              <ul className="about_case_list">
                <li className="about_case_list_items">E-Commerce Design</li>
                <li className="about_case_list_items">Web Development</li>
                <li className="about_case_list_items">UI & UX Design</li>
                <li className="about_case_list_items">Conversion</li>
                <li className="about_case_list_items">Optimisation</li>
                <li className="about_case_list_items">Brand Standardisation</li>
                <li className="about_case_list_items">UI Development</li>
              </ul>
            </div>
            <div className="about_case_solution">
          <h3 className="about_case_right_heading">Solutions</h3>
          <ul className="about_case_list">
          <li className="about_case_list_items">Shopify</li>
          </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCase;
