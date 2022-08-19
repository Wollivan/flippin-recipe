import React from "react";

export default function InputAndButtons({
  changeValue,
  setStateFunc,
  stateVal,
  placeholder,
  modifiers,
  toFixedIfNecessary,
}) {
  return (
    <div className="controls">
      <button
        className="controls__button-decrease"
        onClick={() => changeValue(modifiers[0], stateVal, setStateFunc)}
      >
        {modifiers[0]}
      </button>
      <button
        className="controls__button-decrease"
        onClick={() => changeValue(modifiers[1], stateVal, setStateFunc)}
      >
        {modifiers[1]}
      </button>
      <input
        className="controls__input"
        placeholder={placeholder}
        value={toFixedIfNecessary(stateVal, 2)}
        type="number"
        readOnly
      />
      <button
        className="controls__button-increase"
        onClick={() => changeValue(modifiers[2], stateVal, setStateFunc)}
      >
        +{modifiers[2]}
      </button>
      <button
        className="controls__button-increase"
        onClick={() => changeValue(modifiers[3], stateVal, setStateFunc)}
      >
        +{modifiers[3]}
      </button>
    </div>
  );
}
