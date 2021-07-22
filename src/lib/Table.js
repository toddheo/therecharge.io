import React, { useState, useEffect, useRef } from "react";

const sortTypes = {
  up: {
    class: "sort-up",
    fn: (a, b) => a.net_worth - b.net_worth,
  },
  down: {
    class: "sort-down",
    fn: (a, b) => b.net_worth - a.net_worth,
  },
};

function Table({ data }) {
  const [currentSort, setCurrentSort] = useState("down");

  const onSortChange = () => {
    let nextSort;

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "down";

    setCurrentSort(nextSort);
  };

  return (
    <table className="text-left">
      <thead>
        <tr>
          <th>Charger</th>
          <th onClick={() => onSortChange()}>
            APY {sortTypes[currentSort].class === "down" ? "▼" : "▲"}
          </th>
        </tr>
      </thead>
      <tbody>
        {[...data].sort(sortTypes[currentSort].fn).map((p) => (
          <tr>
            <td>{p.name}</td>
            <td>{p.apy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
