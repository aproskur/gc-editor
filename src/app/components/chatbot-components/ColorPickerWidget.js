import React from 'react';
import { SketchPicker } from 'react-color';
import { SharedDataContext } from 'src/app/SharedDataContext.js'; // Import the SharedDataContext

class ColorPickerWidget extends React.Component {
  static contextType = SharedDataContext; // Set the context type

  render() {
    const { color, updateColor } = this.context; // Access the shared context

    const handleChangeComplete = (color) => {
      // This function will be called whenever the color changes in the picker
      updateColor(color.hex); // Call the function to update the color in the shared context
    };

    return (
      <div>
        <SketchPicker
          color={color}
          onChangeComplete={handleChangeComplete}
        />
      </div>
    );
  }
}

export default ColorPickerWidget;