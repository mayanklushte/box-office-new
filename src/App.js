import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShowDetails from "./pages/ShowDetails";
import Stared from "./pages/Stared";
import "./styles/root.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stared" element={<Stared />} />
        <Route path="/show/:id" element={<ShowDetails />} />
      </Routes>
    </div>
  );
}

export default App;
