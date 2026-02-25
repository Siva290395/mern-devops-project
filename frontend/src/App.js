import { useEffect, useState } from "react";

function App() {

  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://3.86.4.18l")
      .then(res => res.text())
      .then(data => setMsg(data));
  }, []);

  return (
    <div>
      <h1>MERN DevOps Project</h1>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;