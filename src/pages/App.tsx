import React from 'react';
import './App.scss';

const App: React.FC = () => {

  interface Person {
    firstName: string;
    lastName: string;
  }

  function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
  }

  let user = { firstName: "Jane", middleName: 'Doe', lastName: "User" };

  return (
    <div className="App">
      <header className="App-header">
        {greeter(user)}

      </header>
    </div>
  );
}

export default App;
