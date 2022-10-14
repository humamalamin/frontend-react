import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import ListMusic from "./components/ListMusic";
import AddMusic from "./components/AddMusic";
import EditMusic from "./components/EditMusic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListMusic/>}/>
        <Route path="add" element={<AddMusic/>}/>
        <Route path="edit/:id" element={<EditMusic/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
