import React, { useState, useEffect } from 'react';

function ClickCounter2({ startValue, triggerValue, onTriggerValueReached }) {
  const [value, setValue] = useState(startValue);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    if (value >= triggerValue) {
      onTriggerValueReached(value);
    }
  });

  return (
    <div>
      <p>Teller: {value}</p>
      <p>Teller 2: {value2}</p>
      <button onClick={setValue(value + 1)}>Øk telleren</button>
    </div>
  );
}

export default ClickCounter2;
