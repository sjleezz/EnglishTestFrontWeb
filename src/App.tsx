import { Routes, Route } from "react-router-dom";
import GateWay from "./Page/GateWay";
import Home from "./Page/Home";
import { TimerProvider } from "./Provider/TimerContext";

function App() {
  return (
    <TimerProvider>
      <Routes>
        <Route path="*" element={<GateWay />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </TimerProvider>
  );
}

export default App;
