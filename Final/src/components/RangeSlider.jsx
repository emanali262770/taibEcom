import { useState } from 'react';

export default function RangeSlider({ min = 0, max = 500, initialValue = 250 }) {
  // State to store the range value
  const [value, setValue] = useState(initialValue);

  // Handle input change
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-full py-1">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onInput={handleInput}
        id="priceRange"
        className="w-full h-2 rounded-lg appearance-none cursor-pointer focus:outline-none"
        style={{
          background: `linear-gradient(to right, #10b981 ${((value - min) / (max - min)) * 100}%, #d1d5db ${((value - min) / (max - min)) * 100}%)`
        }}
      />
    </div>
  );
}
