import React from "react";
import PropTypes from "prop-types";
import { CustomSelect } from "../../Common";
import { fillStarSVG, emptyStarSVG } from "../../Constants";
import "./style.scss";

const minRate = 1;
const maxRate = 10;
const options = [];

for (let i = minRate; i <= maxRate; i++) {
  const starArray = [];

  for (let j = minRate; j <= i; j++) {
    starArray.push(fillStarSVG);
  }

  for (let j = maxRate - i; j >= minRate; j--) {
    starArray.push(emptyStarSVG);
  }

  options.push({
    label: starArray,
    value: i,
    key: i
  });
}

const Rating = props => {
  const handleRate = selected => {
    props.handleChange(selected, props.name);
  };
  return (
    <div className="rate" key="rate">
      <CustomSelect
        name={props.name}
        options={options}
        selectedOptions={props.selectedValue}
        handleChange={handleRate}
        label="Rating"
      />
    </div>
  );
};

Rating.propTypes = {
  name: PropTypes.string,
  selectedValue: PropTypes.array,
  handleChange: PropTypes.func
};

export default Rating;
