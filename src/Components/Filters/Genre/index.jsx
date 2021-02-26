import React from "react";
import PropTypes from "prop-types";
import { CustomSelect } from "../../Common";
import "./style.scss";

const options = [
  { label: "Action", value: "action" },
  { label: "Comedy", value: "comedy" },
  { label: "Drama", value: "drama" },
  { label: "Thriller", value: "thriller" }
];

const Genre = props => {
  const handleGenre = selected => {
    props.handleChange(selected, props.name);
  };

  return (
    <div className="genre">
      <CustomSelect
        name={props.name}
        options={options}
        selectedOptions={props.selectedValue}
        handleChange={handleGenre}
        label="Genre"
      />
    </div>
  );
};

Genre.propTypes = {
  name: PropTypes.string,
  selectedValue: PropTypes.array,
  handleChange: PropTypes.func
};

export default Genre;
