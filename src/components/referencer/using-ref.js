import React, { useEffect, useRef, useState } from "react";

export default function UsingRef() {
  const [name, setName] = useState("");
  // useRef() use case: is persisting a property
  //    in state without causing a re-render. Also useful in
  //    storing the previous value of a piece of state.
  // returns an object { current: <refVal> }
  const renderCount = useRef(1);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current += 1;
  }, [name]);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => console.log(inputRef)}>Log Me</button>
      <p>Input rendered {renderCount.current} times.</p>
    </div>
  );
}
