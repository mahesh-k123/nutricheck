import React from "react";


const Button = ({ styles}) => (

  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} onClick={event=>window.location.href='../../src/components/Kcalc.html'}> 
    Get Started
  </button>

);

export default Button;
