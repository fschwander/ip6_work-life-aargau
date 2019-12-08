import React from 'react';
import {UncontrolledAlert} from 'reactstrap';
import './App.scss';

const App: React.FC = (props) => {

  const throwAlertOnMobile = () => {
    if(window.innerWidth < 700 || window.innerHeight < 600) {
      return (
        <UncontrolledAlert>
          <h2>Mobile nicht unterstützt</h2>
          <p>Bei dieser Website handelt es sich um einen Prototypen und noch sind nicht alle Funktionen implementiert.</p>
          <p>Wir empfehlen auf einen grossen Bildschirm zu wechseln. </p>
        </UncontrolledAlert>)
    }
  }

  return (
    <div className="App">
      {props.children}
      {throwAlertOnMobile()}
    </div>
  );
};

export default App;
