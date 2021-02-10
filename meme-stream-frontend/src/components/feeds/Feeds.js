import React from 'react'
import Feed from '../feed/Feed';
import classes from './Feeds.module.css';
const Feeds = ({memes, getData}) => {


	const feeds = memes.map((meme) => 
			<Feed key={meme._id} getData={getData} id={meme._id} name={meme.name} caption={meme.caption} url={meme.url} />);
	
	return (

		<div className={classes.Feeds}>
			<div className={classes.FeedsHeader}>
				<h2>Meme Feeds</h2>
			</div>
			<div className={classes.MemeFeeds}>
				{feeds.length === 0 ? 
					<h2 style={{ textAlign: 'center', color:'#ffffff'}}>No Memes to Show</h2> : 
					feeds}	
			</div>
		</div>
	)
}

export default React.memo(Feeds);
