import React from 'react';
import { Link } from 'react-router';

import Title from './header/Title';

export default class Header extends React.Component {

	render() {
		return (
			<header>
				<Title title={this.props.title} subTitle={this.props.subTitle}/>

				<Link to="archives" activeClassName="active" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Archives</Link>
				<Link to="featured" activeClassName="active" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Featured</Link>
				<Link to="settings" activeClassName="active" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Settings</Link>
			</header>
		);
	}
}