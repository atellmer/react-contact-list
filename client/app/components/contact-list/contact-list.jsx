import React, {Component} from 'react';

import Contact from '../contact/contact';
import style from './contact-list.styl';
import contactsModel from '../../models/contacts.json';


class ContactList extends Component {
	
	constructor() {
		super();
		
		this.state = {
			contacts: contactsModel
		}
	}
	
	searchHandler(event) {
		let query = event.target.value.toLowerCase();
		let filter = contactsModel.filter(function(el) {
			let value = el.name.toLowerCase();
			return value.indexOf(query) !== -1;
		});
		
		this.setState({contacts: filter});
	}
	
	render() {
		return (
			<div className={style.container}>
				<input 
					type="text" 
					className={'form-control ' + style.input} 
					onChange={this.searchHandler.bind(this)}
				/>
				<ul className={style.list}>
					{
						this.state.contacts.map(function(el){
							return <Contact 
								key={el.id} 
								name={el.name}
								phone={el.phone}
								avatar={el.avatar}
							/>;
						})
					}
				</ul>
			</div>
		);
	}
}

export default ContactList;