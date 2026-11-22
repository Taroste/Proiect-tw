import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ProgramariPage from "./pages/ProgramariPage.jsx";
import ProgramareDetaliuPage from "./pages/ProgramareDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ProgramariPage />} />
        <Route path="/programari/:id" element={<ProgramareDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}