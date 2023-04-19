import React from 'react';
import './HeaderLi.css';


function HeaderLi (props) {
  
    return (
     <>
        <nav>
            <ul>
                <li> 
                  <a href='#'
                 name={props.genres}
                 onClick={(e)=>{
                                props.getData(e.target.name)
                            }}
                            >{props.genres}</a>
                </li>
            </ul>
       </nav>
    </>  
  )
    };

    export default HeaderLi;