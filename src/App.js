import { useState } from 'react';
import './App.css';

function App() {

  //current date
  //current date will also change state since it shows the next or previous date
  const [date, manageDate] = useState(new Date());
  //declare state of step
  const [step, manageStep] = useState(1);
  //declare state of count (count * step)
  const [count, manageCount] = useState(0);

  //function that adds step
  function addStep(){
    manageStep((currentStep)=>currentStep + 1);
  }
  //function that removes step
  function removeStep(){
    manageStep((currentStep)=>currentStep - 1);
  }
  //function that adds Count
  function addCount(){
    manageCount((currentCount)=>currentCount+1*step);
    date.setDate(date.getDate() + step);
    manageDate(date);
    
  }
  //function that removes Count
  function removeCount(){
    manageCount((currentCount)=>currentCount-1*step);
    date.setDate(date.getDate() - step);
    manageDate(date);
  }
  return (
    <div className="container">
      <div className='step'>
        <button onClick={removeStep}>-</button>
        <span>Step:{step}</span>
        <button onClick={addStep}>+</button>
      </div>
      <div className='counter'>
        <button onClick={removeCount}>-</button>
        <span>Count:{count}</span>
        <button onClick={addCount}>+</button>
      </div>
      <div className='date'>
        {
          count == 0 ? <p>Today is {date.toDateString()}</p> : ""
        }
        {
          count > 0 ? <p>{count} days from today is {date.toDateString()}</p> : ""
        }
        {
          count < 0 ? <p>{count} days ago was {date.toDateString()}</p> : ""
        }
      </div>
    </div>
  );
}

export default App;
