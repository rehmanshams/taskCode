import "./App.css";
import Main from "./mainpage";
import Taskone  from "./taskone";
import Tasktwo from "./tasktwo";
import Taskthree  from "./taskthree";
import  Taskfour from "./taskfour"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="font-Inter">
        <Routes>
          <Route>
            <Route path="/" element={<Main />} />
            <Route path="/taskone" element={<Taskone />} />
            <Route path="/tasktwo" element={<Tasktwo />} />
            <Route path="/taskthree" element={<Taskthree />} />
            <Route path="/taskfour" element={<Taskfour />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;