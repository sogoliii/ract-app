// import AppNavVertical from "../components/AppNavVertical";
import { Outlet } from "react-router-dom";
// import ProductsList from "../components/ProductsList";
import Sidebar from "../components/Sidebar";

function Projects() {
  return (
    <div className="page">
      <Sidebar />
      <div className="line-vertical"></div>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Projects;
