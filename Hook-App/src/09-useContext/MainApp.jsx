import { Routes, Route, Navigate } from "react-router-dom";
import { AboutPage, HomePage, LoginPage } from "./pages";
import { NavBar } from "./components/NavBar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main App</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        {/* <Route path="*" element={<LoginPage />} /> */}
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </UserProvider>
  );
};
