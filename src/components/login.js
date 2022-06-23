import { useState } from 'react'
import emailjs from 'emailjs-com'
import axios from 'axios'
import "../index.css"
import ZFWlogo from "../images/zfw2.png"



const Login = (props) => {
   
  const [values, setValues] = useState({
    email: "",
    password: "",
    loginType: "admin"
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    let inputValues = values;
    // validateDetails(name, value);
    inputValues[name] = value;
    setValues({ ...inputValues });
  }


  const signUp = async (e) => {
    e.preventDefault();
    // console.log(e)
    // console.log(values.status)
    if (values.status === "admin") {
      try {
        let item = { ...values };
        var data = {
          email: item.email,
          password: item.password,
          loginType: "admin"
        };
        // console.log(data)
        let result = await axios.post(
          `${process.env.REACT_APP_URL}users/login`,
          data
        );
        localStorage.setItem("user-info", result.data.token);
        console.log(result.data);
        return (window.location = "/admindashboard");
      } catch (error) {
        // console.log(error.response.data?.data)
        alert(error.response.data?.data)
      }
    }
    else if (values.status === "restraurant") {
      try {
        let item = { ...values };
        var data = {
          email: item.email,
          password: item.password,
          loginType: "restraurant"
        };
        let result = await axios.post(
          `${process.env.REACT_APP_URL}users/login`,
          data
        );
        localStorage.setItem("user-info", result.data.token);
        console.log(result);
        return (window.location = "/");
      } catch (error) {
        alert(error.response.data?.data)
      }
    }
    else if (values.status === "otherproviders") {
      try {
        let item = { ...values };
        var data = {
          email: item.email,
          password: item.password,
          loginType: "otherproviders"
        };
        console.log(data)
        let result = await axios.post(
          `${process.env.REACT_APP_URL}users/login`,
          data
        );
        localStorage.setItem("user-info", result.data.token);
        console.log(result);
        return (window.location = "/");
      } catch (error) {
        alert(error.response.data?.data)
      }
    } else {
      console.log("error");
    }
  }
  return (
    <div>
      <div id='login'>
        <div className='container login'>
          <div className='login-content'>
            <div className='section-title'>
              <h2>Login</h2>
            </div>
            <div className="login-form">
              <form>
                <select className='form-control'
                   name="status"
                   value={values.status}
                   onChange={(e) => handleChange(e)}
                   id="status">
                  <option selected >Select Login Type</option>
                  <option value="admin">Admin</option>
                    <option value="restraurant">Restraurant</option>
                    <option value="otherproviders">Other Providers</option>
                 {/* <option value="3">Three</option> */}
                  </select>
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
                         value={values.password}
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                     <div id='success'></div>
                    <button type='submit' onClick={signUp} className='btn btn-custom btn-lg'>
                      Login
                    </button>
                <p className='c-ac' onClick={() => { return (window.location = "/register") }}>Create account</p> 
            </form>
            </div>
            </div>
          </div>
          </div>
        </div>
  )
}
export default Login