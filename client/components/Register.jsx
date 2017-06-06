import React from 'react'

const Register = () => {
    return (
      <div id='login-container'>
        <div id='register'>
          REGISTER
          <form>
            Name:<br/>
          <input type="text" name="name"/><br/>
            Email:<br/>
          <input type="text" name="email"/><br/>
            Username:<br/>
          <input type="text" name="username"/><br/>
            Create password:<br/>
          <input type="text" name="password-1"/><br/>
            Repeat password:<br/>
          <input type="text" name="password-2"/><br/>
          </form>
        </div>
      </div>
    )
}

export default Register
