import React, { useState, useEffect } from 'react';

function ClickCounter2({ startValue, triggerValue, onTriggerValueReached }) {
  const [value, setValue] = useState(startValue);

  useEffect(() => {
    if (value >= triggerValue) {
      onTriggerValueReached(value);
    }
  });

  return (
    <div>
      <p>Teller: {value}</p>
      <button onClick={setValue(value + 1)}>Øk telleren</button>
    </div>
  );
}

export default ClickCounter2;
