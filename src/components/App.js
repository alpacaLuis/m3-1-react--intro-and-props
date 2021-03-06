import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

const App = (props) => {
  console.log(props)
  return (
    <div className='wrapper'>
      <Header />
      <ChatStream messages={props.conversation.messages} participants={props.conversation.participants}/>
      <Footer />
    </div>
  );
};

export default App;
