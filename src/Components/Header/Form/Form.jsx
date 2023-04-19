import React from 'react';
import './Form.css';




function Form (props) {

  
  return (
    <form>
            
            <div className='wrapperForm'>
                <input type="text"
                       placeholder="Enter Movie Name" 
                       className="inputText"
                       onChange={(e)=>{props.setSearch(e.target.value)}} 
                       name={props.search}
                       onKeyPress={(evt) => props.searchMovie(evt)}>
                </input> 
            
                      <button className={`search-btn ${props.isClicked ? 'button-clicked' : ''}`} onClick={()=>{props.handleClick();props.handleLightThemeClick()}}>Light</button>
                      <button className={`search-btn ${!props.isClicked ? 'button-clicked' : ''}`} onClick={()=>{props.handleResetClick();props.handleDarkThemeClick()}}>Dark</button>
             </div>


            
            
    </form>   
  )
}

export default Form;

