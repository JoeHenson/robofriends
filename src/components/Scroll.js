import React, { Component } from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '5px solid black', height: '920px'}} >
			{props.children }
		</div>
	) 
}


export default Scroll

