import axios from 'axios';
import React, { useState } from 'react';
import { GrEdit } from 'react-icons/gr';
import classes from './Feed.module.css';
const Feed = ({getData, id, name, url, caption}) => {


	let [edit, setEdit] = useState(false);
	let [newCaption, setCaption] = useState('');
	let [newUrl, setUrl] = useState('');


	const toggleEditHandler = () => {
		setEdit(!edit);
		console.log(edit);
	}

	const captionChangeHandler = e => setCaption(e.target.value); 


	const urlChangeHandler = e => setUrl(e.target.value); 


	const editFormHandler = async (e, id) => {
		e.preventDefault();
		try{
			await axios.patch(`http://localhost:5343/memes/${id}`, {
					caption: newCaption,
					url: newUrl
			});

			setCaption('');
			setUrl('');
			setEdit(false);
			getData();
		}
		catch(err){
				console.log(err);
		}
	}


	const editForm = () => {
		return (
			<div className={classes.EditFrom}>
			<form onSubmit={(e) => editFormHandler(e, id)}>
				<div className={classes.Input}>
					<input placeholder='New Caption Here' value={newCaption} onChange={captionChangeHandler}/>
				</div>
				<div className={classes.Input}>
					<input placeholder='New Image Url Here' value={newUrl} onChange={urlChangeHandler}/>
				</div>
				<button className={classes.Button} type='submit'>Save</button>
			</form>
			<hr />
			</div>
		)
	}

	

	return (
		<div className={classes.Feed}>
			<div className={classes.FeedHeader}>
				<h2>{name}</h2>	
				<button onClick={toggleEditHandler}>< GrEdit /></button>
			</div>
			<hr/>
			{edit === true ? editForm() : null}
			<h3>{caption}</h3>
		<div className={classes.FeedImage}>
				<img src={url}  alt="meme" />
			</div>
		</div>
	)
}

export default Feed