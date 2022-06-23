import { useState } from 'react'
import emailjs from 'emailjs-com'
import "../index.css"
const initialState = {
  name: '',
  email: '',
  message: '',
}
 const ChangePassword = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='login'>
        <div className='container login'>
          <div className='login-content'>
              <div className='section-title'>
                <h2>Change Password</h2>
            </div>
            <div className="login-form">
                          <form name='sentMessage' validate onSubmit={handleSubmit}>
                          <input
                        type='password'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Old Password'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                      <input
                        type='password'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='New Password'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                      <input
                        type='password'
                        id='password'
                        name='password'
                        className='form-control'
                        placeholder='Confirm Password'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    {/* </div> */}
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                Submit
                </button>
            </form>
            </div>
            </div>
          </div>
          </div>
        </div>
  )
}
export default ChangePassword