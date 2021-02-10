import React from 'react'
import classes from './Header.module.css';
import logo from '../../assets/logo.png';
import { FaGlobeAsia, FaGithub } from 'react-icons/fa';

const Header = () => {
	return (
		<div className={classes.Header}>
			<img src={logo} alt='logo' width='200px'/>
			<h1>Meme Stream</h1>
			<div className={classes.Icons}>
				<button ><a href='https://ankitvashisht12.github.io/' target='_blank' rel='noreferrer'> <FaGlobeAsia /></a></button>
				<button ><a href='https://github.com/ankitvashisht12' target='_blank' rel='noreferrer'><FaGithub /></a></button>
			</div>
		</div>
	)
}

export default Header
