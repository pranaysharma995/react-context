import { useState } from 'react';
import './App.css';
import AppContext from './AppContext';
import Articles from './components/Articles';

function App() {
  const [list,setList]=useState([
    {
      id:1,
      title:'ICC world cup 2023 began in india with 10 teams',
      desc:'format will be played in 50 over format and round robin. each team will play witheach other and top 4 will qualify for semi-final.'
    },
    {
      id:2,
      title:'Snowfall in north india',
      desc:'shimla, manali witness first snowfall of season as temparature fall down below 10 across all himalyan states.'
    },
    {
      id:3,
      title:'Delhi get prepared for another winter pollution',
      desc:'The infamous delhi pollution will likely to hit in the mid octorber with AQI average across city will reach at 200.'
    },
    {
      id:4,
      title:'Cricket in olympics',
      desc:'Cricket will began its journey again in olympics from olympic 2028. it will be played in 20 over format'
    }
  ])
  const [bookmark,setBookmark]=useState([]);

  const deleteBookmark=(id) =>
  {
    let newList=bookmark.filter(item => item.id !== id);
    setBookmark(newList);
  }

  const deleteArticle=(id) =>
  {
    let newList=list.filter(item => item.id !== id);
    deleteBookmark(id);
    setList(newList);
  }
  const addBookmark=(item) =>
  {
    setBookmark((arr) => [...arr,item])
  }

  const data={
    list:list,
    deleteArticle:deleteArticle,
    bookmark:bookmark,
    deleteBookmark:deleteBookmark,
    addBookmark:addBookmark
  }
  return (
    <AppContext.Provider value={data}>
      <Articles />
    </AppContext.Provider>
  );
}

export default App;
