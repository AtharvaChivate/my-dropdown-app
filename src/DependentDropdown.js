import React, { useState } from "react";

const DependentDropdown = ({
  data,
  levels,
  onSelectionChange,
  labels = [],
  placeholder = "Select",
}) => {
  const [selections, setSelections] = useState(
    levels.reduce((acc, level) => ({ ...acc, [level]: "" }), {})
  );

  const handleChange = (levelIndex) => (e) => {
    const newValue = e.target.value;
    const newSelections = { ...selections };
    newSelections[levels[levelIndex]] = newValue;

    for (let i = levelIndex + 1; i < levels.length; i++) {
      newSelections[levels[i]] = "";
    }

    setSelections(newSelections);
    onSelectionChange?.(newSelections);
  };

  const getOptions = (levelIndex) => {
    if (levelIndex === 0) {
      return Object.keys(data);
    }

    let currentLevel = data;
    for (let i = 0; i < levelIndex; i++) {
      const selection = selections[levels[i]];
      if (!selection || !currentLevel[selection]) {
        return [];
      }
      currentLevel = currentLevel[selection];
    }
    return Object.keys(currentLevel || {});
  };

  return (
    <div>
      {levels.map((level, index) => (
        <div key={level}>
          {index > 0 && <br />}
          <label htmlFor={level}>{labels[index] || level}: </label>
          <select
            id={level}
            value={selections[level]}
            onChange={handleChange(index)}
          >
            <option value="">
              {placeholder} {labels[index] || level}
            </option>
            {getOptions(index).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default DependentDropdown;
