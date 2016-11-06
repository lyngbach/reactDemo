import React from 'react';

import Header from '../components/Header';

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: 'Time Tracker'
		};
	}

	render() {
		return (
			<div>
				<Header title={this.state.title} subTitle={this.props.children}/>
			</div>
		);
	}
}