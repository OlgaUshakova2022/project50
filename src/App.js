import React from 'react';
import './App.css';

// import Header from './Components/Header/Header';
// import Content from './Components/Content/Content';
import StartComponent from './Components/StartComponent/StartComponent';


// import Start from './Components/Start/Start';
import {Route, Routes, Link, NavLink, BrowserRouter } from 'react-router-dom';
import Start from './Components/Start/Start';

// import {welcome} from 'react-router-dom';
// import Content from './Components/Content/Content';

// import{useTheme} from'./hooks/useTheme';



function App(props) {
// const{theme,setTheme}=useTheme();

// const handleLightThemeClick=()=>{
//   setTheme('light')
// }
// const handleDarkThemeClick=()=>{
//   setTheme('dark')
// }

  return (
   <BrowserRouter>
   <>
          {/* <div className='startWrapper'>
                    <div className='start'>
                      <a href ="/start" className='startSpan'>Welcom</a>
                  </div> */}
                        {/* <ul>
                      
                              <li><a href="/start">Start</a></li>  
                          </ul> */}
                        <Routes> 
                            {/* <Route  path='/' element={<App/>} /> */}
                           <Route  path='/' element={<Start/>}/> 
                           <Route  path='/start' element={<StartComponent a = {props.a}/>}/> 
                            // {/* <Route  path='/start' element={<Header genres={props.a.genres}/>} /> */}
                        </Routes>
                            
                  
          {/* </div> */}</>
   </BrowserRouter>
        


    //       {/* <Start/>

    //       <Routes>
    //         <Route exact path='/welcome' component={Header} />

    //       </Routes>
        
    //       <Header genres={props.a.genres}/>
    //       <Content/>
    //     </div>
    //  */}
    
  ); 
}

export default App;

