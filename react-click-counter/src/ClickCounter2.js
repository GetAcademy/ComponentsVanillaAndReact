import React, { useState, useEffect } from 'react';

function ClickCounter2({ startValue, triggerValue, onTriggerValueReached }) {
  const [value, setValue] = useState(startValue);

  useEffect(() => {
    if (value >= triggerValue) {
      onTriggerValueReached(value);
    }
  }, [value, triggerValue, onTriggerValueReached]);

  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <div>
      <p>Teller: {value}</p>
      <button onClick={handleIncrement}>Øk telleren</button>
    </div>
  );
}

export default ClickCounter2;
