import React from "react";
import PropTypes from "prop-types";

import MultiSelect from "react-multi-select-component";
import { css } from "goober";
import "./style.scss";

const CustomSelect = props => {
  const { selectedOptions, options, label, name, handleChange } = props;

  const handleOnChange = s => {
    handleChange(s, name);
  };

  const DefaultRenderer = css({
    "& input,& span": {
      verticalAlign: "middle",
      margin: 0
    },
    span: {
      display: "inline-block",
      paddingLeft: "5px"
    },
    "&.disabled": {
      opacity: 0.5
    }
  });

  const DefaultItemRenderer = ({ checked, option, onClick, disabled }) => (
    <div
      className={(DefaultRenderer, "item-renderer", disabled && "disabled")}
      key={option.label + Math.random(100)}
    >
      <input
        type="checkbox"
        onChange={onClick}
        checked={checked}
        tabIndex={-1}
        disabled={disabled}
        key={option.label + Math.random(100)}
      />
      <span key={option.label + Math.random(100)}>{option.label}</span>
    </div>
  );

  return (
    <div className="custom-select" key={`${props.name} ${props.label}`}>
      <MultiSelect
        className="custom-select--multi-select"
        value={selectedOptions}
        name={name}
        onChange={handleOnChange}
        options={options}
        labelledBy={label}
        overrideStrings={{
          selectSomeItems: `${label}`,
          allItemsAreSelected: `All ${label} are Selected`,
          selectAll: `Any ${label.toLowerCase()}`
        }}
        disableSearch={true}
        menuIsOpen={true}
        ItemRenderer={DefaultItemRenderer}
      />
    </div>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  selectedOptions: PropTypes.array
};

export default CustomSelect;
