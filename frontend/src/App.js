import React, { useEffect, useState } from "react";

export default function App() {
  const [numArray, setNumberArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4001");
      const data = await res.json();
      setNumberArray(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {numArray.map((num) => (
        <h1>{num}</h1>
      ))}
    </div>
  );
}
