
import "./Styyle.css";
const OPD = () => {
  return (
    <>
    <div className="ipdbody">
      <div><label>OPD No</label><input type="number" /></div>
      <div><label>UHID No</label><input type="number" /></div>
      <div><label>Name</label><input type="text" /></div>
      <div><label>Father Name</label><input type="text" /></div>
      <div><label>Age</label><input type="number" /></div>
      
      <div><label>Consultant Dr</label><input type="text" /></div>
      <div><label>Mobile Number</label><input type="number" /></div>
      <div><label>Fee</label><input type="number" /></div>
      <div >
        <label>Gendre</label>
        
          Male<input type="radio" />
          Female<input type="radio" />
          Other<input type="radio" />
       
      </div>
      <div><label>Address</label><textarea type="text" /></div>
      
      <button>Save</button>
    </div>
    </>
  );
};

export default OPD;