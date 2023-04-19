import React from 'react'
import HeaderLi from './HeaderLi/HeaderLi';
import './Header.css';
import Form from './Form/Form';


function Header(props) {
  
let genresElements = props.genres.map((n) => <HeaderLi genres = {n.name} getData={props.getData}
/>);

  return (
    <div className='header'>
      {genresElements}
      <Form searchMovie= {props.searchMovie} setSearch = {props.setSearch} handleLightThemeClick={props.handleLightThemeClick} handleDarkThemeClick={props.handleDarkThemeClick} isClicked={props.isClicked} setIsClicked={props.setIsClicked} handleClick={props.handleClick} handleResetClick={props.handleResetClick}/>
    </div>
  )
}

export default Header;

