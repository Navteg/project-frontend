import React from "react";
import "./filter-project.css";
import {
  TITLE_FILTER,
  FRONTEND_FILTER,
  BACKEND_FILTER
} from "../utils/constant";

const FilterProject = ({ setFilterData, title, frontend, backend }) => {
  const clearFilter = function () {
    setFilterData(TITLE_FILTER, "");
    setFilterData(FRONTEND_FILTER, "");
    setFilterData(BACKEND_FILTER, "");
  }

  return (
    <div>
      <div className="filter-bar">
        <input
          className="filter-input"
          type="text"
          placeholder="Filter by Title"
          value={title}
          onChange={(e) => setFilterData(TITLE_FILTER, e.target.value)}
        />
        <input
          className="filter-input"
          type="text"
          placeholder="Filter by Frontend"
          value={frontend}
          onChange={(e) => setFilterData(FRONTEND_FILTER, e.target.value)}
        />
        <input
          className="filter-input"
          type="text"
          placeholder="Filter by Backend"
          value={backend}
          onChange={(e) => setFilterData(BACKEND_FILTER, e.target.value)}
        />
        <button className="filter-button" onClick={() => clearFilter()}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterProject;
