
import React, { useState } from 'react';
import Select from 'react-select';
import '../Css/menu.css';


export function Menu() {
  const options = [
    { value: 'chocolate', label: <div><img src="En.jpeg" height="15px" width="15px"/>EN </div> },
    { value: 'chocolate', label: <div><img src="DE.png" height="15px" width="15px"/>DE </div> },
    
  
  ];
  const customStyles = {
      option: () => ({
        backgroundColor: 'white' ,
        color : 'black',
        paddingBottom: 5,
        }),
  }
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
  <div>
    <p className='text1'>customer Service 091 234-ELLA</p>
    <div className="select1">
      <Select  className='box'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={customStyles}
       
      />
    <div className="select2">
      <Select  className='box'
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={customStyles}
       
      />
      </div>
    </div>
    <p className='text2'><b>Free shipping on All Orders. No Minimum Purchase</b></p>
    <img className='logo' src="logo.avif"/>
    <i  id="cart" class="bi bi-bag"> Shopping Cart </i>
    <i id='wishlist' class="bi bi-heart"> My Wish List</i>
    <p className='text3'>Sign in <span>or</span> Create an account </p>  
    
    </div>
  );
}
