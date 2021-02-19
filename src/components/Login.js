import React from 'react'
import { auth, provider } from '../firebase'
import { Button } from '@material-ui/core'
import { LoginContainer, LoginInnerContainer } from './Login.Styles'

function Login() {
  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithPopup(provider).catch((error) => alert(error.message))
  }

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'
          alt=''
        />

        <h1>Sign In with Google</h1>
        <p>SlackClone.com</p>

        <Button type='submit' onClick={signIn}>
          Sign In With Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login
