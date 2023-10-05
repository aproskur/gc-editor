import React from "react";
import { HexColorPicker } from "react-colorful";
import { useSharedData } from "src/app/SharedDataContext.js"; // Adjust the path accordingly

const Colorful = () => {
  const { color, updateColor } = useSharedData();

  const handleColorChange = (newColor) => {
    updateColor(newColor);
  };

  return (
    <HexColorPicker color={color} onChange={handleColorChange} />
  );
};

export default Colorful;
