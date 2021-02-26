import React, { useState } from "react";

import Filter from "../../Components/Filters";
import "./style.scss";

const initFilters = {
  genre: [],
  rating: []
};

const Home = () => {
  const [filters, setFilter] = useState(initFilters);

  const handleFilter = (selected, name) => {
    setFilter({ ...filters, [name]: selected });
  };
  return (
    <div className="filters">
      <div className="filters--search">
        <Filter.Search
          name="search"
          handleChange={handleFilter}
          filters={filters}
        />
      </div>

      <div className="filters--genre">
        <Filter.Genre
          name="genre"
          selectedValue={filters.genre}
          handleChange={handleFilter}
        />
      </div>

      <div className="filters--rate">
        <Filter.Rate
          name="rating"
          selectedValue={filters.rating}
          handleChange={handleFilter}
        />
      </div>
    </div>
  );
};

export default Home;
