import React from 'react'

 const Login = () => {
    return (
      <div id='login-container'>
        <div id='login'>
          LOGIN
          <form>
            Username:<br/>
          <input type="text" name="username"/><br/>
            Password:<br/>
          <input type="text" name="password"/><br/>
          </form>
        </div>
      </div>
    )
}

export default Login
