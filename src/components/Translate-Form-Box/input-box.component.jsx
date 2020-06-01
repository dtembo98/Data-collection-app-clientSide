import React from "react";
import "./input-box.style.css";

const InputBox = () => (
  <div>
    <form className="msger-inputarea">
      <input
        type="text"
        className="msger-input"
        placeholder="Enter your translation"
      />
      <button type="submit" className="msger-send-btn">
        Send Translation
      </button>
    </form>
  </div>
);
export default InputBox;
