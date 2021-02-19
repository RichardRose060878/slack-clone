import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import styled from 'styled-components'
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Login from './components/Login'
import Spinner from 'react-spinkit'
import { AppBody, AppLoading, AppLoadingContents } from './App.Styles'

function App() {
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src='https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg'
            alt=''
          />

          <Spinner
            className='app__spinner'
            name='ball-spin-fade-loader'
            color='purple'
            fadeIn='none'
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path='/room/:roomId'>
                  <Chat />
                </Route>
                <Route path='/'>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  )
}

export default App
