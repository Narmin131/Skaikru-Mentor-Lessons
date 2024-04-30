import { useEffect, useState } from "react";
import "./App.css";
import TopToBtn from "./components/TopToBtn";
import Home from "./pages/Home/Home";
import Preloder from "./components/Preloder";
function App() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  const [open, setOpen] = useState(false);

  return (
    <>
      {loading ? (
        <Preloder />
      ) : (
        <div className="App">
          <h1>Salam</h1>
        </div>
      )}
    </>
  );
}

export default App;
