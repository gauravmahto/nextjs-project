'use client';

import { useState } from 'react';

export default function Counter() {

  const [value, setCount] = useState(0);

  return (

    <>

      <p>The count is {value}</p>
      <button onClick={() => setCount(value + 1)}>| Click Me! |</button>

    </>

  );

}
