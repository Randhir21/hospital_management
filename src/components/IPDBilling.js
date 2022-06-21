import React, { useState } from "react";
import { nativeTouchData } from "react-dom/test-utils";

export default function IPDBilling() {
  const tData = { desc: "", rate: "", unit: "", amount: "" };
  const [bill, setBill] = useState(tData);
  const [allBill, setAllBill] = useState([]);
  const handleChange = (e) => {
    setBill({ ...bill, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    setAllBill([...allBill, bill]);
    handleClear(tData);

    e.preventDefault();
  };
  const handleClear = () => {
    setBill(tData);
  };
  const handleDelete = (i) => {
    console.log(i);
    const data = allBill.filter((e, index) => index != i);
    setAllBill(data);
  };
  const handleUpdate=(i)=>{
    setBill(allBill[i]);
    handleDelete(i);
  }

  const total = allBill.reduce((prev,current)=>prev+current.amount,0);

  return (
    <>
      <form className="ipdbillingbody">
        <div>
          <label>Reg. No</label>
          <input type="number" disabled />
        </div>
        <div>
          <label>UHID No</label>
          <input type="number" disabled />
        </div>
        <div>
          <label>Name</label>
          <input type="text" disabled />
        </div>
        <div>
          <label>Admission Date</label>
          <input type="date" disabled />
        </div>
        <div>
          <label>Age</label>
          <input type="number" disabled />
        </div>
        <div>
          <label>Address</label>
          <input type="text" disabled />
        </div>
        <div>
          <label>Admitted in</label>
          <input type="text" disabled />
        </div>
      </form>

      <form className="tablebill" onSubmit={handleSubmit}>
        <input
          type="text"
          name="desc"
          placeholder="Discription"
          value={bill.desc}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="rate"
          placeholder="Rate"
          value={bill.rate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="unit"
          placeholder="Unit"
          value={bill.unit}
          onChange={handleChange}
        />
        <input
          type="text"
          name="amount"
          placeholder="Amount"
          value={(bill.amount = bill.rate * bill.unit)}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>

      <table className="customers">
        <tr>
          <th>Discription</th>
          <th>Rate</th>
          <th>Unit</th>
          <th>Amount</th>
          <th>Update / Delete</th>
         
        </tr>

        {allBill.map((e, index) => (
          <tr key={index}>
            <td style={{ textTransform: "uppercase" }}>{e.desc}</td>
            <td>{e.rate}</td>
            <td>{e.unit}</td>
            <td>{e.amount}</td>
            <td>
              <button onClick={()=>handleUpdate(index)}>update</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
            
          </tr>
        ))}
      </table>
      <div className="sumtotalbill">
          <p>Total Bill: {total} </p>
          <p>Advance: 0</p>
          <p>Net Amount: {total}</p>
      </div>
      <div>

      </div>
    </>
  );
}
