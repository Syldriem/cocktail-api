import { Outlet } from "react-router-dom";
import "../css/App.css";
import { LandingPage } from "./Landing";

export function App() {
  return (
    <>
      <LandingPage />
      <Outlet />
    </>
  );
}
