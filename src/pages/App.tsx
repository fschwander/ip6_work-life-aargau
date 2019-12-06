import React from 'react';
import {UncontrolledAlert} from 'reactstrap';
import './App.scss';

const App: React.FC = (props) => {

  const throwAlertOnMobile = () => {
    console.log(window.innerWidth);
    if(window.innerWidth < 600 || window.innerHeight < 800) {
      return (
        <UncontrolledAlert>
          <h2>Mobile nicht unterstützt</h2>
          <p>Bei dieser Website handelt es sich um einen Prototypen und kleine Screens werden noch nicht
            unterstützt.</p>
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
