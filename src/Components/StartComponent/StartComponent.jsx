import React, {useEffect, useState} from 'react';
// import Header from './Components/Header/Header';
// import Content from './Components/Content/Content';
import Header from '../Header/Header';
import Content  from '../Content/Content';
import{useTheme} from'../../hooks/useTheme';


let API_key ="&api_key=b3cfc2a04127d0d4f502e77f574fb609";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;


function StartComponent(props) {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    console.log({isClicked});
  };
  const handleResetClick = () => {
    setIsClicked(false);
    console.log({isClicked});
  };

  const{theme,setTheme}=useTheme();

  const handleLightThemeClick=()=>{
    setTheme('light')
  };
  const handleDarkThemeClick=()=>{
    setTheme('dark')
  };


  const [movieData, setData]=useState([]);
  const [url_set, setUrl]=useState(url);
  const [search,setSearch]=useState();

  useEffect(() =>{
      fetch(url_set).then(res=>res.json()).then(data=>{
        //   console.log(data.results);
          setData(data.results);
      });
  }, [url_set]);
 
 
  const getData = (movieType)=>{

          if(movieType=="Popular"){
              url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
      
          }
          
          if (movieType=='Kids'){
              url=base_url+'/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'+API_key;
             
          }
          if (movieType=='Drama'){
              url=base_url+'/discover/movie?with_genres=18&primary_release_year=2014'+API_key;
          }
          if (movieType=='Comedie'){
              url=base_url+'/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc' +API_key;
          }
          if (movieType=='Theatre'){
            url=base_url+'/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'+API_key;
        }
           setUrl(url);
      };


  const searchMovie=(evt)=>{
      if (evt.key=="Enter")
      {url=base_url+'/search/movie?api_key=b3cfc2a04127d0d4f502e77f574fb609&query='+ search;
     setUrl(url); 
     setSearch(' ');
      }
    }
  

  return (
    <div>
        
        <Header genres={props.a.genres} getData={getData} searchMovie = {searchMovie} setSearch = {setSearch} handleLightThemeClick = {handleLightThemeClick} handleDarkThemeClick={handleDarkThemeClick} setIsClicked={setIsClicked} isClicked={isClicked} handleClick={handleClick} handleResetClick={handleResetClick}/>
        <Content movieData={movieData}/>
    </div>
  ) 
}

export default StartComponent;
