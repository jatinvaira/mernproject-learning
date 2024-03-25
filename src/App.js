import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import NotFound from "./components/NotFound";

import EmployeeDetails from "./components/EmployeeDetails";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//           <Route path="/employee/:id" component={EmployeeDetails} />
//           {/* <Route exact path="/employees" component={EmployeeDirectory} /> */}
//           {/* <Route component={NotFound} /> */}
//         </Switch>
//       </div>
//     </Router>

//   );
// }

// export default App;
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import EmployeeList from "./components/EmployeeList";

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// function Home() {
//   return <h1>Home</h1>;
// }

// function About() {
//   return <h1>About</h1>;
// }

// function Contact() {
//   return <h1>Contact</h1>;
// }

// function EmployeeDetails({ id }) {
//   return <h1>Employee Details of Employee with ID: {id}</h1>;
// }

// function NotFound() {
//   return <h1>Page Not Found</h1>;
// }

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employeelist" element={<EmployeeList />} />

        <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
