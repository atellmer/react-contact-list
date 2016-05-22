import React, {Component} from 'react';

import ContactList from '../components/contact-list/contact-list';
import style from './app.styl';

class App extends Component {
  render() {
    return (
      <div className={'container-fluid '}>
        <div className={'container '}>
          <ContactList/>
        </div>
      </div>
    );
  }
}

export default App;