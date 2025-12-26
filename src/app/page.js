// "use client";

// import { useState } from "react";

// export default function Home() {

//   // const [buttonState, setButtonState] = useState({
//   //   on: false, off: false
//   //   // second: { on: false, off: false },
//   //   // tird: { on: false, off: false },
//   //   // fourth: { on: false, off: false }
//   // })

//   async function toggle(light, state) {
//     await fetch("/api/light", {
//       method: "POST",
//       body: JSON.stringify({ light, state }),
//     });

//   }

//   return (
//     <div className="container-items">
//       <h1>CONTROL LIGHT IN REMOTE WHEREVER</h1>
//       {[1, 2, 3, 4, 5].map(n => (
//         <div key={n}>
//           Light {n}
//           <button onClick={() => {

//             toggle(n, "ON")
//           }}>ON</button>
//           <button onClick={() => toggle(n, "OFF")}>OFF</button>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const toggle = async (light, state) => {
    try {
      const res = await fetch("/api/light", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ light, state }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setMessage(`Light ${light} turned ${state}`);
      } else {
        setMessage(`Failed to turn light ${light}: ${data.error || "Unknown error"}`);
      }
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }

    // Clear message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div>
      <h1>CONTROL LIGHT IN REMOTE WHEREVER</h1>
      {message && <p>{message}</p>}

      {[1, 2, 3, 4, 5].map(n => (
        <div key={n}>
          Light {n}
          <button onClick={() => toggle(n, "ON")}>ON</button>
          <button onClick={() => toggle(n, "OFF")}>OFF</button>
        </div>
      ))}
    </div>
  );
}
