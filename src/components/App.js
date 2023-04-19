import React, { useEffect, useRef, useState } from 'react'
import '../styles/App.css';

const App = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [phoneError, setPhoneError] = useState();

  useEffect(()=>{
    console.log('useEffect');
    if(nameError==false && emailError==false && passwordError==false && phoneError==false){
      setSignedUp(true);
      setName('');
      setEmail('');
      setPassword('');
      setPhone('');
      console.log(nameError,emailError,passwordError,phoneError);
    }
    else{
      setSignedUp(false);
    }
  },[nameError,emailError,passwordError,phoneError])

  function handleClick(e){
    e.preventDefault();
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(phone);
    if(name==''){
      setNameError(true);
    }else{
      setNameError(false);
    }
    if(email==''){
      setEmailError(true);
    }else{
      setEmailError(false);
    }
    console.log(email.length);
    setPasswordError(password.length<4);

    setPhoneError(phone.length!=10);

  }

  return (
    <div id="main">
      {signedUp==true && 
      <h3 className='success-alert'>Registered Successfullly</h3>}
      <form>
        <h1>Registeration Form</h1>
        <section>
          <label>Username</label>
          <input type="text" name='username' value={name} onChange={(e)=>setName(e.target.value)}/>
          {nameError==true && <p className='username-error'>Invalid Username</p>}
          <label>Email</label>
          <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          {emailError==true && <p className='email-error'>Invalid Email</p>}
          <label>Password</label>
          <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          {passwordError==true && <p className='password-error'>Invalid Password</p>}
          <label>Contact Number</label>
          <input type="number" name='contactNo' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
          {phoneError==true && <p className='contactNo-error'>Invalid Number</p>}
          <button onClick={handleClick}>Submit</button>
        </section>
      </form>
    </div>
  )
}


export default App;
