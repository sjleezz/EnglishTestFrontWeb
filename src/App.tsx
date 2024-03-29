import { Routes, Route } from "react-router-dom";
import GateWay from "./Page/GateWay";
import Home from "./Page/Home";
import Login from "./Page/Login/LoginPage";
import { TimerProvider } from "./Provider/TimerContext";

function App() {

  return (
    <TimerProvider>
      <Routes>
        <Route path="*" element={<GateWay />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </TimerProvider>
  );
}

export default App;
