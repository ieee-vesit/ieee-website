import React from "react";
import "./Darkb.css";

const Industries = () => {
  const industries = [
    { icon: "🔧", title: "Metals", description: "Experts in metal processing and manufacturing. We specialize in crafting metal solutions to meet your needs." },
    { icon: "⛏️", title: "Mining", description: "Maximize mineral resource value. Comprehensive mining solutions for optimal efficiency and productivity." },
    { icon: "⚡", title: "Energy", description: "Innovative energy solutions for a sustainable future. Tailored solutions from renewable energy to power generation." },
    { icon: "🧬", title: "Life Sciences", description: "Driving life-changing innovations. Offering cutting-edge solutions for pharmaceuticals and biotechnology." },
  ];

  return (
    <section className="industries">
      <div className="industries-container">
        {/* Heading on the left */}
        <div className="industries-heading">
          <h2>Discover the industries we serve</h2>
        </div>
        
        {/* Industries in 2x2 Table Form on the Right */}
        <div className="industry-table">
          <div className="industry-row">
            <div className="industry">
              <div className="icon">🔧</div>
              <h3>Metals</h3>
              <p>Experts in metal processing and manufacturing. We specialize in crafting metal solutions to meet your needs.</p>
            </div>
            <div className="industry">
              <div className="icon">⛏️</div>
              <h3>Mining</h3>
              <p>Maximize mineral resource value. Comprehensive mining solutions for optimal efficiency and productivity.</p>
            </div>
          </div>
          <div className="industry-row">
            <div className="industry">
              <div className="icon">⚡</div>
              <h3>Energy</h3>
              <p>Innovative energy solutions for a sustainable future. Tailored solutions from renewable energy to power generation.</p>
            </div>
            <div className="industry">
              <div className="icon">🧬</div>
              <h3>Life Sciences</h3>
              <p>Driving life-changing innovations. Offering cutting-edge solutions for pharmaceuticals and biotechnology.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
