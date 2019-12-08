import React, {useEffect} from 'react';
import {PopupContainer} from '../components/containers/PopupContainer';
import './App.scss';

const App: React.FC = (props) => {
  const [showOnMobileAlert, setShowOnMobileAlert] = React.useState(false)

  useEffect(() => {
    if (window.innerWidth < 700 || window.innerHeight < 600) {
      setShowOnMobileAlert(true)
    }
  }, [])

  return (
    <div className="App">
      {props.children}
      {showOnMobileAlert ?
        <PopupContainer onClose={() => setShowOnMobileAlert(false)}>
          <h2>Mobile nicht unterstützt</h2>
          <p>Bei dieser Website handelt es sich um einen Prototypen und noch sind nicht alle Funktionen
            implementiert.</p>
          <p>Wir empfehlen auf einen grossen Bildschirm zu wechseln. </p>
        </PopupContainer> : null}
    </div>
  );
};

export default App;
