import React from "react";

export default function MIS() {
  return (
    <>
      <div className="ipdbody">
        <div>
          <label> Date From</label>
          <input type="date" />
        </div>
        <div>
          <label>Date To</label>
          <input type="date" />
        </div>
        <div>
          <label>Time From</label>
          <input type="time" />
        </div>
        <div>
          <label>Time To</label>
          <input type="time" />
        </div>
      </div>
    </>
  );
}
