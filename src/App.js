import "./App.css";
import HomePage from "./components/frontend/HomePage";
import Navbar from "./components/frontend/Navbar";
import About from "./components/frontend/About";
import MedicalSpecialists from "./components/frontend/MedicalSpecialists";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/frontend/LoginPage";
import Footer from "./components/frontend/Footer";
import ContactUs from "./components/frontend/ContactUs";
import GetFree from "./components/frontend/GetFree";
import Community from "./components/frontend/Community";

function App() {
  return (
    <Router>
   
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" exact element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/medicalspecialists" element={<MedicalSpecialists />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/getfreeconsultant" element={<GetFree />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <HomePage/>
        <About/>
        <MedicalSpecialists/>
        <ContactUs/>
        <Community/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
