import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter'; 


function App() {
  const handleTriggerValueReached = (value) => {
    console.log(`Telleren nådde: ${value}`);
  };

  return (
    <div className="App">
      <ClickCounter startValue={10} triggerValue={20} triggerValueReached={handleTriggerValueReached}></ClickCounter>
      <ClickCounter startValue={5} triggerValue={10} triggerValueReached={handleTriggerValueReached}></ClickCounter>
    </div>
  );
}

export default App;
