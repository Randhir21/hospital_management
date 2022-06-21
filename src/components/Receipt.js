import React from "react";

export default function Receipt() {
  return (
    <div>
      <div className="ipdbody">
        <div>
          <label>Reg. No</label>
          <input type="text" disabled />
        </div>
        <div>
          <label>UHID No</label>
          <input type="text" disabled />
        </div>
        <div>
          <label>Pt. Name</label>
          <input type="text" disabled />
        </div>
        <div>
          <label>Admision Date</label>
          <input type="date" disabled />
        </div>
        <div>
          <label>Age</label>
          <input type="text" disabled />
        </div>
        <div>
          <label>Admitted In</label>
          <input type="text" disabled />
        </div>
        
        
        <div>
          <label>Gendre</label>
          <input type="text" disabled />
        </div>
        <div>
          <label>Address</label>
          <textarea type="text" disabled />
        </div>
        <div>
          <label>Amount</label>
          <input type="text"  />
        </div>
        <button>Save</button>
      </div>
    </div>
  );
}
