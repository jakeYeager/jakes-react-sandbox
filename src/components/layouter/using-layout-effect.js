import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function UsingLayoutEffect() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  //== useEffect() runs async and after the DOM has been painted,
  //    thus any DOM elements that need to respond to React calculations
  //    will show inital element state, then calculated state (they could jump).

  //== useLayoutEffect() is not async and evaluated before the DOM is painted,
  //    allowing for clean layout calculations
  useLayoutEffect(() => {
    if(!popup.current || !button.current) { return; }
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  });

  return (
    <div>
      <button ref={button} onClick={() => setShow(!show)} >Show modal</button>
      {show && (
        <div ref={popup} style={{position: "absolute", color: "green"}}>
          This is a modal!
        </div>
      )}
    </div>
  )
}
