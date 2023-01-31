import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "./Components/Home";
import Students from "./Components/Students";
import ContactUs from "./Components/ContactUs";
import AddNewStudent from "./Components/AddNewStudent";
// import { useContext } from "react";
import { useState } from "react";
import Data from "./Components/DataContext";
import EditStudent from "./Components/EditStudent"

function App() {
  const [state, setState] = useState(
    [{
      name: 'Ajay',
      age: '22',
      course: 'Full Stack',
      batch: 'EA18',
    }]
  )
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={
          <Data.Provider value={{ entries: state, updateFunction: setState }}>
            <Home />
          </Data.Provider>} />
        <Route path="students" element={<Data.Provider value={{ entries: state, updateFunction: setState }}>
          <Students />
        </Data.Provider>} />
        <Route path="contact" element={<Data.Provider value={{ entries: state, updateFunction: setState }}>
          <ContactUs />
        </Data.Provider>} />
        <Route path="/addnewstudent" element={<Data.Provider value={{ entries: state, updateFunction: setState }}>
          <AddNewStudent />
        </Data.Provider>} />
        <Route path="/editstudent" element={<Data.Provider value={{ entries: state, updateFunction: setState }}>
          <EditStudent />
        </Data.Provider>} />
      </Routes>
    </div>
  );
}

export default App;
