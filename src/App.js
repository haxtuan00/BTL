import logo from './logo.svg';
import './App.css';
import Button from './Button';
import Input from './Input';
import {useState} from 'react'
function App() {
  const [form,setForm]=useState(false)
  return (
    <div className="App">
      <div className='show-form'>
      {form?(
        <form onSubmit={(e)=>e.preventDefault()}>
          <div className='group-input'>
            <Input typeInput='text' text='Name'/>
            <Input typeInput='number' text='Amount'/>
            <Input typeInput='date' text='Date'/>
          </div>
          <div className='group-btn'>
            <Button text='ADD' colorButton='violet'  />
            <Button text='Cancel' onClickButton={()=>setForm(false)}/>
          </div>
        </form>
      ): 
      (<Button 
        text='Add New Expense'
        colorButton={"violet"}
        onClickButton={()=>setForm(true)}
      />)}
      </div>
    </div>
  );
}

export default App;
