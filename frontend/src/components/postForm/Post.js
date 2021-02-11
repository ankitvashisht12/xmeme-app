import React, { useState} from 'react'
import axios from 'axios'

import classes from './Post.module.css';

const Post = ({getData}) => {

	let [name, setName] = useState('');
	let [caption, setCaption] = useState('');
	let [imgUrl, setImgUrl] = useState('');
	let [error, setError] = useState(false);

	const nameChangeHandler = (e) => 
		setName(e.target.value);

	
	const captionChangeHandler = (e) => 
		setCaption(e.target.value);

	const imageUrlChangeHandler = (e) => 
		setImgUrl(e.target.value);
	
	
	const validInputs = (name, caption, url) => {
		if(!name || !url || !caption)
			return false;

		let nameCheck = /^[A-Z,a-z].*$/;
		let urlCheck = /^http[s]?:\/\/.+$/;
		if(!nameCheck.test(name) || !urlCheck.test(url))
			return false;
		return true;
	}
	
	const postSubmitHandler = (e) => {
		e.preventDefault();
		if(validInputs(name, caption, imgUrl)){
			const data = {
				name,
				caption,
				url: imgUrl
			}
			axios.post('/memes', data)
					.then(res => {
						getData();
						setName('');
						setCaption('');
						setImgUrl('');
						setError(false);
					})
					.catch(err => console.log(err));
		}	
		else {
			setError(true);
			setName('');
			setCaption('');
			setImgUrl('');
		}
	}


	return (
		<div className={classes.Post}>
			<h2>Post a meme</h2>	
			<form className={classes.Form} onSubmit={postSubmitHandler}>
				<div className={classes.Input}>
					<input placeholder='Name' 
					value={name}
					onChange={nameChangeHandler}/>
				</div>
				<div className={classes.Input}>
					<input placeholder='Caption'
					value={caption}
					onChange={captionChangeHandler}/>
				</div>
				<div className={classes.Input}>
					<input placeholder='Image URL'
					 value={imgUrl}
					 onChange={imageUrlChangeHandler}/>
				</div>
				<button className={classes.Button} type='submit' >Submit</button>
			</form>
			{error ? 
				<div className={classes.ErrorMsg}> Please Provide Valid Input </div> :
				null}
		</div>
	)
}

export default Post
