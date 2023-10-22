import React from 'react';
import News from './News';
import InfoSidebar from './InfoSidebar';
import classes from './articles.module.css';


function Articles(props)
{
    return(
       <div className={classes.container}>
       <News />
       <InfoSidebar />
       </div>
    )
}

export default Articles;