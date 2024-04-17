import React from 'react';
import ReactDOM from 'react-dom';
import  {add,sub,mul} from "./calc";
import "./index.css";
let  currDate= new Date;
currDate= currDate.getHours();
let Greeting='';
const cssstyle={};
if(currDate>=1 && currDate<=12){
  Greeting="good morning";
  cssstyle.color='red';
}
else if(currDate>12 && currDate<20){
Greeting='good afternoon';
cssstyle.color='pink';
}
else{
  Greeting='good night';
  cssstyle.color='blue';
}


ReactDOM.render(
  <>

  <h1 className="greeting" >Greeting website </h1>
 <div className='website'>
  
  <h1 className='box'>Hello Sir ,<span style={cssstyle}>{Greeting}</span></h1>
 </div>
  </>,
  document.getElementById("root")
);
