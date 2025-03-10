import React, { useState, useEffect } from 'react';

function ClickCounter2({ startValue, triggerValue, onTriggerValueReached }) {
  const [value, setValue] = useState(startValue);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    if (value >= triggerValue) {
      onTriggerValueReached(value);
    }
  }, [value, triggerValue, onTriggerValueReached]);

  return (
    <div>
      <p>Teller: {value}</p>
      <p>Teller 2: {value2}</p>
      <button onClick={()=>setValue(value + 1)}>Øk teller 1</button>
      <button onClick={()=>setValue2(value2 + 1)}>Øk teller 2</button>
    </div>
  );
}

export default ClickCounter2;
