import React from "react";

export const UpdateDCB = () => {
  return (
    <div>
      <h1>Update Daily Collection Book</h1>
      <form action="">
        <div>
          <label htmlFor="ctype">Type</label>
          <select name="ctype" id="ctype">
            <option value="">Select</option>
            <option value="sas">Sas</option>
            <option value="water">water</option>
            <option value="trade">trade</option>
          </select>
        </div>
      </form>
    </div>
  );
};
