import React from "react";
import { Routes, Route, BrowserRouter, Form } from "react-router-dom";
import Success from "./components/Success";
import Home from "./components/Home";
/*import Loader from "./components/Loader/Loader";8*/

export default function App() {
  /*const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);*/

  return (
    /* <>
      {loading === true ? (
        <Loader />
      ) : (*/
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
    /*)}
    </>*/
  );
}
