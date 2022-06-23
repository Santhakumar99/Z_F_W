import React from 'react'
import "../components/css/thanks.css"
const Thanks = () => {

    const goback = () => {
        return (window.location = "/");
    }
  return (
      <div className='thanks-head'>
      <p style={{
        marginTop:"100px",margin:"20px",textAlign:"center",fontSize:"20px"}}>Thank you for your registration.we will get back to you soon..<br/>For additional queries, contact: +91 800000000</p>
            <div style={{margin:"auto",width:"30%"}}><button className='btn btn-primary' type="button" onClick={goback} >Go to Home Page</button></div>
      </div >

  )
}

export default Thanks