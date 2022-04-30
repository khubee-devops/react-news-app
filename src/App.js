import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [newsList, setNewsList] =useState([])

  useEffect(()=>{
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
    .then((response)=> response.json())
    .then((data)=> {
      setNewsList(data)
      console.log(data)
    });
  }, []);


  return (
    <div className="App">
      <div className='bg-gradient-to-r from-cyan-300 to-blue-300 '>
      <div >
        <h1 className="text-6xl font-bold ">Space News</h1>
      </div>

      <div className='newsContainer'>
        {newsList.map((val,key)=>{
          return (
            <div key={key} className='article' > 
              <h3 className='p-6 text-2xl font-bold'>{val.title}</h3>
              <img src={val.imageUrl} alt="text"/>
              <p className='p-4'>{val.summary}</p>
              <h4 className='pb-3'>{val.publishedAt}</h4>
              <button className='p-3 rounded-full bg-lime-500 hover:bg-lime-700 mb-3 drop-shadow-lg' onClick={()=>{
              window.location = val.url
            }}>Read Full Story</button>
            </div>
          )


        })}

       

      </div>
      </div>
    </div>
  );
}

export default App;
