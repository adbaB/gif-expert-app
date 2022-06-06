import React, { useState } from "react";
import PropTypes from "prop-types";
import "./GifAdd.css";
const GifAdd = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((category) => [inputValue, ...category]);
      setInputValue("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

GifAdd.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default GifAdd;
