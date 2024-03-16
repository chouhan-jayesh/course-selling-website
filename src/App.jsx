import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import Homepage from "./components/Homepage.jsx";
import Addcourse from "./components/Addcourse.jsx";

function App() {
  return (
    <div style={{
        width:'100vw',
        height:'100vh',
        backgroundColor: "#f0f0f0"
    }}>
        <Appbar />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/addcourse" element={<Addcourse />}></Route>
          <Route path="/login" element={<Signin />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
