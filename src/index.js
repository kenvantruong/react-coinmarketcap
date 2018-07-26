import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
  const title = 'React Coin';

  return (
  <div>
    <h1>{title}</h1>
    <p>Cryptocurrency | Blockchain</p>


          
    
  </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);