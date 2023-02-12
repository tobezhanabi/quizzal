import React from "react";
import { Option } from "../style/Option.styled";

function OptionButtons({ answer, selected, onSelect }) {
  return (
    <Option>
      <button
        onClick={() => onSelect(answer)}
        style={{ backgroundColor: selected ? "#d6dbf5" : "" }}
      >
        {answer}
      </button>
    </Option>
  );
}

export default OptionButtons;
