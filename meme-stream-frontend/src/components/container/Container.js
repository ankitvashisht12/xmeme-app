import React, { useState, useEffect } from 'react'
import Post from '../postForm/Post';
import Feeds from '../feeds/Feeds'
import classes from './Container.module.css';
import axios from 'axios';
const Container = () => {

	let [ memes , setMemes ] = useState([]);

	const getData = async () => {
		try {
			memes = await axios.get('/memes');
			memes = memes.data;

			setMemes(memes);
		}
		catch(err){
			console.log(err);
		}
	}

	useEffect(() => {
		getData();
	}, [])


	return (
		<div className={classes.Container}>
			<Post getData={getData}/>
			<Feeds memes={memes} getData={getData}/>
		</div>
	)
}

export default Container
