import React from 'react';
import './Content.css';
import Card from './Card/Card';


const Content = (props)=> {

  return (
    <div className='cotainer'>
        
            {
                 props.movieData.map((res)=>{
                
                    return(
                        <Card info={res}/>
                    )
                })
            }
    </div>
  )
}

export default Content;



