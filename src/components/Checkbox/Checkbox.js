import React, { useState, useEffect } from "react";
import { InputCustom } from "./Checkbox.style";

const Checkbox = ({ fnClick, fnChange, title = "", checked = false }) => (
  <InputCustom>
    <label>
      <input
        onClick={(e) => {
          if (fnClick !== undefined) fnClick(e.target.checked);
        }}
        onChange={(e) => {
          if (fnChange !== undefined) fnChange(e.target.checked);
        }}
        type="checkbox"
        checked={checked}
      />
      {title}
    </label>
  </InputCustom>
);

export default Checkbox;
