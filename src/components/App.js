import React, { useRef, useState } from 'react'
import '../styles/App.css';

const App = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();

  const [nameError, setNameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [phoneError, setPhoneError] = useState(true);

  function handleClick(e){
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(phone);
    if(name!=null){
      setNameError(false);
    }
    if(email!=null){
      setEmailError(false);
    }
    if(password!=null || password.length>=6){
      setPasswordError(false);
    }
    if(phone!=null || phone.length==10){
      setPhoneError(false);
    }
    if(nameError==false && emailError==false && passwordError==false && phoneError==false){
      setName('');
      setEmail('');
      setPassword('');
      setPhone('');
    }

  }

  return (
    <div id="main">
      {nameError==false && emailError==false && passwordError==false && phoneError==false && 
      <h3 className='success-alert'>Registered Successfullly</h3>}
      <form>
        <h1>Registeration Form</h1>
        <section>
          <label>Username</label>
          <input type="text" name='username' onChange={(e)=>setName(e.target.value)}/>
          {nameError==true && <p className='username-error'>Invalid Username</p>}
          <label>Email</label>
          <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)}/>
          {emailError==true && <p className='email-error'>Invalid Email</p>}
          <label>Password</label>
          <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)}/>
          {passwordError==true && <p className='password-error'>Invalid Password</p>}
          <label>Contact Number</label>
          <input type="number" name='contactNo' onChange={(e)=>setPhone(e.target.value)}/>
          {phoneError==true && <p className='contactNo-error'>Invalid Number</p>}
          <button onClick={handleClick}>Submit</button>
        </section>
      </form>
    </div>
  )
}


export default App;
