import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import "../index.css"
import axios from 'axios'
const initialState = {
  name: '',
  email: '',
  message: '',
}
const initialValues = {
  loginType: "",
  email: "",
  password: "",
  mobile: "",
  Rname: "",
  address: "",
  };
const Registration = () => {
    // const [{ name, email, message }, setState] = useState(initialState)
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
      const { name, value } = e.target;
      let inputValues = values;
      console.log(values)
      // validateDetails(name, value);
      inputValues[name] = value;
      setValues({ ...inputValues });
    }
    // const getLocation = () => {
    //     if (!navigator.geolocation) {
    //       setStatus('Geolocation is not supported by your browser');
    //     } else {
    //       setStatus('Locating...');
    //       navigator.geolocation.getCurrentPosition((position) => {
    //         setStatus(null);
    //         setLat(position.coords.latitude);
    //         setLng(position.coords.longitude);
    //       }, () => {
    //         setStatus('Unable to retrieve your location');
    //       });
    //     }
    //   }
    const Register = async(e) => {
      e.preventDefault()
      try {
        let item = { ...values };
        // var data = {
        //   email: item.email,
        //   password: item.password,
        //   loginType: "admin"
        // };
        console.log(item)
        let result = await axios.post(
          `${process.env.REACT_APP_URL}users/adduser`,
          item
        )
        console.log(result);
        // return (window.location = "/");
      } catch (error) {
        console.log(error)
      }
    }
    return (
      <div>
        <div id='login'>
          <div className='container login'>
            <div className='register-content'>
                <div className='section-title'>
                  <h2>Registration</h2>
              </div>
                         <div className="login-form">
                         <form >
                      <select className='form-control'
                    name="loginType"
                    value={values.loginType}
                    onChange={(e) => handleChange(e)}
                          aria-label="Default select example">
                  <option value="">Select Type</option>
                  <option value="restraurant">Restraurant</option>
                   <option value="otherproviders">Other Providers</option>
                </select>
              <input
                type='text'
                id='name'
                name='userName'
                className='form-control'
                placeholder='Name'
          required
          value={values.userName}
                onChange={handleChange}
              />
              <p className='help-block text-danger'></p>
              <input
                type='email'
                id='email'
                name='email'
                className='form-control'
                placeholder='Email'
          required
          value={values.email}
                onChange={handleChange}
              />
              <p className='help-block text-danger'></p>
              <input
                type='password'
                id='password'
                name='password'
                className='form-control'
                placeholder='Password'
          required
          value={values.password}
                onChange={handleChange}
              />
              <p className='help-block text-danger'></p>
               <input
                type='tel'
                id='phone'
                name='mobile'
                className='form-control'
                placeholder='Phone'
          required
          value={values.mobile}
                onChange={handleChange}
              />
              <p className='help-block text-danger'></p>
                      {values.loginType === "restraurant" ? (
                          <input
                              type='text'
                              id='res'
                              name='Rname'
                              className='form-control'
            placeholder='Restaurant Name'
            value={values.Rname}
                              required
                              onChange={handleChange}
                          />) : ""}
                        
                            <textarea
                              type='textarea'
                              id='res'
                              name='address'
                              className='form-control'
                              placeholder='Address'
                              required
                              value={values.address}
                              onChange={handleChange}
                          />
                    <button type='submit' onClick={Register} className='btn btn-custom btn-lg'>
          Register
        </button>
    </form>
              </div>
              </div>
            </div>
            </div>
          </div>
    )
  }

export default Registration