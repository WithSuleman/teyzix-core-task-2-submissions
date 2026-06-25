import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Success from "./pages/Success";

function App() {
  return (
       <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
     </ThemeProvider>
  );
}

export default App;