import React, {Component} from 'react';

import style from './contact.styl';

class Contact extends Component {

	constructor(props) {
		super(props);

		this.name = this.props.name;
		this.phone = this.props.phone;
		this.avatar = this.props.avatar;
	};

	render() {
		return (
			<li className={style.item}>
				<img 
					className={'img-responsive ' + style.pic} 
					src={this.avatar}/>
				<div className={style.info}>
					<div className={style.name}>{this.name}</div>
					<div className={style.phone}>{this.phone}</div>
				</div>
			</li>
		);
	}
}

export default Contact;