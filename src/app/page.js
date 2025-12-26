"use client";

import { useState } from "react";

export default function Home() {

  // const [buttonState, setButtonState] = useState({
  //   on: false, off: false
  //   // second: { on: false, off: false },
  //   // tird: { on: false, off: false },
  //   // fourth: { on: false, off: false }
  // })

  async function toggle(light, state) {
    await fetch("/api/light", {
      method: "POST",
      body: JSON.stringify({ light, state }),
    });

  }

  return (
    <div className="container-items">
      <h1>CONTROL LIGHT IN REMOTE WHEREVER</h1>
      {[1, 2, 3, 4, 5].map(n => (
        <div key={n}>
          Light {n}
          <button onClick={() => {

            toggle(n, "ON")
          }}>ON</button>
          <button onClick={() => toggle(n, "OFF")}>OFF</button>
        </div>
      ))}
    </div>
  );
}
