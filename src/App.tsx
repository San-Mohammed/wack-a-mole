import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const boxes = Array.from({ length: 16 }, (_, i) => i + 1);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(Math.floor(Math.random() * 16));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="grid">
      {boxes.map((n, index) => (
        <div key={n} className="box">
          {currentIndex === index && n}
        </div>
      ))}
    </div>
  );
}

export default App;
