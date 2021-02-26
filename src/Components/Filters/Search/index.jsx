import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Autosuggest from "react-autosuggest";
import { films } from "../../Constants";
import "./style.scss";

const Search = props => {
  const [suggestions, setSuggestions] = useState(films);
  const [value, setValue] = useState("");
  const [showBorder, setShowBorder] = useState(false);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const inputProps = {
    placeholder: "Enter move name",
    value,
    onChange: onChange
  };

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return films.filter(film => {
      const filters = {
        rating: props.filters.rating.length
          ? props.filters.rating.map(r => r.value)
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        genre: props.filters.genre.length
          ? props.filters.genre.map(g => g.value)
          : ["action", "comedy", "thriller", "drama"]
      };
      return (
        film.title.toLowerCase().slice(0, inputLength) === inputValue &&
        filters.rating.includes(Math.round(film.rating.value)) &&
        filters.genre.includes(film.category.toLowerCase())
      );
    });
  };

  const getSuggestionValue = suggestion => {
    return suggestion.title;
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setShowBorder(true);
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setShowBorder(false);
    setSuggestions(films);
  };

  const renderSuggestion = suggestion => {
    return (
      <div className="film-info" key="film-info">
        <div className="film-info--main" key="film-info--main">
          <div className="film-info--main--title" key={suggestion.title}>
            {suggestion.title}
          </div>
          <div className="film-info--main--rate" key={suggestion.rating.value}>
            {suggestion.rating.label}
          </div>
        </div>
        <div
          className="film-info--category"
          key={`${suggestion.category} ${suggestion.rating.value}`}
        >
          {suggestion.category}
        </div>
      </div>
    );
  };

  const shouldRenderSuggestions = (v, r) => {
    return v.length >= 0;
  };

  return (
    <div className="search">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={{
          input: {
            width: "100%",
            height: "100%",
            paddingLeft: "15px",
            boxSizing: "border-box"
          },
          container: { width: "100%", height: "100%" },
          suggestionsContainer: {
            width: "100%",
            border:
              showBorder && suggestions.length ? "1px solid #979797" : "none",
            marginTop: "5px",
            boxSizing: "border-box"
          },
          suggestionsList: { listStyle: "none", padding: "0 0 0 14px" }
        }}
        shouldRenderSuggestions={shouldRenderSuggestions}
      />
    </div>
  );
};

Search.propTypes = {
  filters: PropTypes.object
};

export default Search;
