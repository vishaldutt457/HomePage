import React from 'react';
import './Body.css';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';


function Body() {
    return (
        <div className="body">
           <div className="body_Left">
           <h3>Polling</h3>
               <div className="bodyLeft1">
               <div className="Left_left">
              
               <input className="inputs" type="text" placeholder="40%" />
               <input className="inputs"  type="text" placeholder="20%"/>
               <input className="inputs"   type="text" />
               </div>
               <div className="Left_right">
               <button>Yes</button>
               <button>No</button>
              
               </div>
              
               </div>
              
               
              
               
               <h4>News Letters</h4>
               <div className="para">
               <p>NewsLetter1</p>
               <p>NewsLetter2</p>
               <p>NewsLetter3</p>
               <p>NewsLetter4</p>
               </div>
              
           </div>

           <div className="body_Right">
                <h3>Advertisement</h3>
           </div>
        </div>
    )
}

export default Body
