import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard";
import {Calendar} from "./pages/Calendar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
