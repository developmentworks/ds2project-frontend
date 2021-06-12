import React from 'react';
import { Header, Brand,NavAbout } from './style'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

function NavHeader() {
  return (
    <Header>
      <Brand>
        <MonetizationOnIcon fontSize="large" />
        <span>Eco Poupex</span>
      </Brand>
      <NavAbout>About</NavAbout>
    </Header>
  )
}
export { NavHeader }
