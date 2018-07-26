import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import './index.css';



const App = () => {
  const title = 'React Coin';

  return (
  <div>
    <Header />
    <h1>{title}</h1>
    <p>Cryptocurrency | Blockchain</p>


          
    
  </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);