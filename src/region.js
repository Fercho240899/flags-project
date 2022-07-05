import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const RegionStyle = styled.div`
  select {
    border: 3px solid purple;
    text-align: center;
    font-size: 18px;
    border-radius: 10px;
  }
  .details {
    padding: 1.5em;
  }
`;

const filterByRegionAction = (regionSelected) => {
  return {
    type: "FILTER_BY_REGION",
    payload: { regionSelected },
  };
};

export const Region = () => {
  const dispatch = useDispatch();
  const filterByRegion = useSelector((state) => state.filterByRegion);

  /**
   * Disptach filterByRegion action
   *
   * @param {React.SyntheticEvent} selectEvent
   */
  const onRegionChange = (selectEvent) => {
    const value = selectEvent.target.value;

    dispatch(filterByRegionAction(value));
  };

  return (
    <RegionStyle>
      <div className="details">
        <select onChange={onRegionChange} value={filterByRegion}>
          <option value="">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </RegionStyle>
  );
};
