import { Navigate, Route, Routes } from "react-router-dom";
import SlidePage from "./SlidePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/slide/1" replace />} />
      <Route path="/slide/:id" element={<SlidePage />} />
    </Routes>
  );
}
