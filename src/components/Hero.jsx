import React from "react";
import wave from "../assets/images/wave.png"

const Hero = () => {
  return (
    <section className="hero">
      <p>
        Hello <img src={wave} alt="wave" style={{ width: "75px" }} /> ,<br /> I'm <span>Bonolo Nkosi</span> - student <br /> frontend developer based <br /> in Cape Town, SA.
      </p>
      <ul className="social-links">
        <li><a href="https://github.com/NoloLibra">GitHub</a></li>
        <li><a href="www.linkedin.com/in/bonolo-nkosi-👨🏽‍💻-2a28a4205">LinkedIn</a></li>
        {/* <li><a href="#">Email</a></li> */}
      </ul>
    </section>
  );
};

export default Hero;
