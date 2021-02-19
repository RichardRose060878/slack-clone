import React from 'react'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import {
  HeaderAvatar,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
} from './Header.Styles'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function Header() {
  const [user] = useAuthState(auth)

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder='Search' type='text' />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
