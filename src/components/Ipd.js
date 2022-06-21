
import "./Styyle.css";
const IPD = () => {
  return (
    <>
    <div className="ipdbody">
      <div><label>Reg. No</label><input type="number" /></div>
      <div><label>UHID No</label><input type="number" /></div>
      <div><label>Name</label><input type="text" /></div>
      <div><label>Father Name</label><input type="text" /></div>
      <div><label>Age</label><input type="number" /></div>
      <div><label>Admitted In</label><input type="text" /></div>
      <div><label>Consultant Dr</label><input type="text" /></div>
      <div><label>Mobile Number</label><input type="number" /></div>
      <div >
        <label>Gendre</label>
        <div>Male<input type="radio" /></div>
        <div>Female<input type="radio" /></div>
        <div>Other<input type="radio" /></div>
          
          
       
      </div>
      <div><label>Address</label><textarea type="text" /></div>
      <button>Save</button>
    </div>
    </>
  );
};

export default IPD;

// const Container = styled.div`
//   width: 40%;
//   margin: 24px auto;
//   background-color: white;
//   border-radius: 8px;
//   box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
//   padding: 8px;
// `;

// const PageHeading = styled.h1`
//   text-align: center;
// `;

// const IpdForm = styled.form`
//   display: grid;
  
//   /* width: 50%; */
//   /* background-color: yellow; */
//   margin: 16px auto;
//   /* background-color: white; */
//   /* height: 80vh; */
// `;

// const InputField = styled.div`
//   /* width: 40%; */
//   /* margin-bottom: 16px; */
//   /* padding: 16px 4px; */
//   margin: 8px;
//   label {
//     margin-right: 20px;
//     font-size: 20px;
//     display: block;
//   }
//   input {
//     border-radius: 6px;
//     border-bottom: 1px solid black;
//     background-color: transparent;
//     padding: 8px;
//     width: 100%;
//   }
// `;

// const ShortInput = styled.div`
// width: 46%;
// `
