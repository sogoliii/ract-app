import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Awards() {
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

export default Awards;
