import React from "react";

export default function Select({ filter, val }) {
  return (
    <div id="select">
      <label htmlFor="opt">filter options: </label>
      <select name="opt" id="opt" onChange={filter} value={val}>
        <option value="">Filter options</option>
        <option value="htl">Price high to low</option>
        <option value="lth">Price low to high</option>
        <option value="rating">Popularity</option>
      </select>
    </div>
  );
}
