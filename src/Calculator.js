import React,{useState} from 'react'
import './Calculator.css';

function Calculator() {
    const  [weight, setweight] =  useState('');
     const  [height, setheight] =  useState('');
      const  [bmi, setbmi] =  useState('');
      const  [msg, setmsg] =  useState('');
      const [healthTip, setHealthTip] = useState('');

	
      const handleSubmit = (event) => {
        event.preventDefault();
      
        if (weight <= 0 || height <= 0) {
          alert("Please enter a valid weight and height");
        } else {
          let bmi = weight *10000/ (height * height);
          setbmi(bmi.toFixed(1));
      
          if (bmi > 30) {
            setmsg('You are Obese');
            setHealthTip('Tip: Consider incorporating more fruits and vegetables into your diet.');
          } else if (bmi >= 25 && bmi <= 30) {
            setmsg('You are Overweight');
            setHealthTip('Tip: Regular physical activity can help maintain a healthy weight.');
          } else if (bmi >= 18.5 && bmi <= 25) {
            setmsg('You are Healthy Weight');
            setHealthTip('Tip: Keep up the good work! Maintain a balanced diet and stay active.');
          } else {
            setmsg('You are Underweight');
            setHealthTip('Tip: Ensure you are getting enough nutrients and consider consulting a healthcare professional.');
          }
        }
      };
      
let reload=()=>{
  window.location.reload()
}
const getBMIColor = (bmi) => {
  if (bmi > 30) {
    return 'red'; // Obese - red
  } else if (bmi >= 25 && bmi <= 30) {
    return 'orange'; // Overweight - orange
  } else if (bmi >= 18.5 && bmi <= 25) {
    return 'green'; // Healthy Weight - green
  } else {
    return 'blue'; // Underweight - blue
  }
};


  return (
    <div>
    <div className='header'>BMI calculator</div>
      <form onSubmit={handleSubmit}>
    <div>
  <label htmlFor="name">Weight in kgs:</label>
    <input type="number" id="name" name="weight" value={weight} onChange={(e)=>{setweight(e.target.value);
	}} /></div>
  <div>
    <label htmlFor="height">Height in cm:</label>
    <input type="number" id="height" name="height" value={height} onChange={(e)=>{setheight(e.target.value)}} />
    </div>
 
 
        <button type="submit">Submit</button>
        <button type="submit" onClick={reload}>Reload</button>
        <div className='center'>
  <h3>Your BMI is: {bmi}</h3>
  <p style={{ color: getBMIColor(bmi) }}>{msg}</p>
  <p style={{ color: getBMIColor(bmi) }}>{healthTip}</p>
</div>
</form>
    </div>
  )
};

export default Calculator
