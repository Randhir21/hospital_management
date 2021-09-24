import React from 'react'
import "./Styyle.css";
export default function Ipd() {
    return (
        <>
         <div className="ipdbody">
             <label>OPD No</label> <input />
             <label>Name</label> <input />
             <label>Father Name</label> <input />
             <label>Age</label> <input  />
              <label>Gender</label> <input />
             <label>Address</label> <textarea />
             <label>Consultant Dr</label> <input />
             <label>Specilist in</label> <input />
             <label>Qualification</label> <input />
             <label>Fee</label> <input />
                <button>Save</button>
            
        </div>   
        </>
    )
}
