import React, { useContext } from 'react'
import classes from './articles.module.css'
import AppContext from '../AppContext'

function InfoSidebar (props) {
  const ctx = useContext(AppContext)
  const { bookmark, deleteBookmark } = ctx
  return (
    <div className={classes.infoSidebar}>
      <h2>Your Bookmarks {bookmark.length}</h2>
      {bookmark.map((item, index) => (
        <div key={item.id} className={classes.articleCard}>
          <div className={classes.btnGroup}>
            <span>
              <i
                className='fa fa-times'
                onClick={() => {
                  deleteBookmark(item.id)
                }}
              ></i>
            </span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default InfoSidebar
