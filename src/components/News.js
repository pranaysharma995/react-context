import React, { useContext} from 'react'
import classes from './articles.module.css'
import AppContext from '../AppContext'

function News (props) {
  const ctx = useContext(AppContext);
  const {deleteArticle,list,addBookmark}=ctx;
  return (
    <div className={classes.articles}>
      <h2>Recent Articles {list.length}</h2>
      {list.map((item, index) => (
        <div key={item.id} className={classes.articleCard}>
            <div className={classes.btnGroup}>
            <span><i className='fa fa-trash' onClick={() => {deleteArticle(item.id)}} ></i></span>
            <span><i className='fa fa-bookmark' onClick={() => {addBookmark(item)}}></i></span>
            </div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default News
