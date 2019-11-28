import React from 'react';
import './App.scss';

const App: React.FC = (props) => {

  return (
    <div className="App">
      {props.children}
    </div>
  );
};

export default App;
