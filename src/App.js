import logo from './logo.svg';
import sloth from './example.gif';
import './App.css';
import ActionLink from './ActionLink.js';

function App() {
  return (
    <div className="App">
     
        <img src={sloth} alt="a sloth reacting"/>
        <p>
          Me "reacting" to learning React in only two weeks.
        </p>
        
        <ActionLink />
        
     
    </div>
  );
}

export default App;



