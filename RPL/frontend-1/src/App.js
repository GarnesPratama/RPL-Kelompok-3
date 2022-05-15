import "./App.css";
import Homepage from "./homepage";
import Detail from "./detail";
import Booking from "./booking";
import Validation from "./validation";
import Login from "./login";
import Succes from "./succes";
import SignUp from "./signUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/validation" element={<Validation />} />
        <Route path="/booking/validation/succes" element={<Succes />} />
      </Routes>
    </div>
  );
}

export default App;
