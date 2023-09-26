import logo from './logo.svg';
import './App.css';
import ClickCounter from './ClickCounter'; 


function App() {
  const handleTriggerValueReached = (event) => {
    console.log(`Telleren nådde: ${event.detail.newValue}`);
  };

  return (
    <div className="App">
      <ClickCounter startValue={10} triggerValue={20} onTriggerValueReached={handleTriggerValueReached}></ClickCounter>
      <ClickCounter startValue={5} triggerValue={10} onTriggerValueReached={handleTriggerValueReached}></ClickCounter>
    </div>
  );
}

export default App;
