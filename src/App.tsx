import { Routes, Route } from "react-router-dom";
import GateWay from "./Page/GateWay";
import { TimerProvider } from "./Provider/TimerContext";

function App() {
  return (
    <TimerProvider>
      <Routes>
        <Route path="*" element={<GateWay />} />
      </Routes>
    </TimerProvider>
  );
}

export default App;
