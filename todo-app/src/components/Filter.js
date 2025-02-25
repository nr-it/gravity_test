import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const Filter = ({ setFilter }) => {
  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <ToggleButtonGroup
      value={setFilter}
      exclusive
      onChange={handleFilterChange}
      fullWidth
      style={{ marginBottom: 20 }}
    >
      <ToggleButton value="all">All</ToggleButton>
      <ToggleButton value="completed">Completed</ToggleButton>
      <ToggleButton value="pending">Pending</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Filter;
