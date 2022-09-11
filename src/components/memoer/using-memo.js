import React, { useState, useMemo } from "react";

export default function UsingMemo() {
  const [numb, setNumb] = useState(0);
  const [dark, setDark] = useState(false);
  const themeStyle = {
    color: dark ? "white" : "black",
    backgroundColor: dark ? "black" : "white",
  };
  //== REFERENCE vs VALUE use case-> new refernces to consts are created after re-render.
  //== After setting ANY state, the re-render causes the entire function of the component
  //==  to be re-evaluated... including slow functions.

  // const doubleNumber = slowFunction(numb);

  //==  Thus exposing slow functions to ANY state change unnecessarily degrades preformance.
  //==  useMemo() stores the return value and only re-evaluates if the targeted
  //==    hook dependancy changes.

  const doubleNumber = useMemo(() => {
    return slowFunction(numb);
  }, [numb]);

  return (
    <div>
      <input
        type="number"
        value={numb}
        onChange={(e) => setNumb(parseInt(e.target.value))}
      />
      <br />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  // console.log("calling slow func");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
