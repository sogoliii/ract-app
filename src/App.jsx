import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Awards from "./pages/Awards";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import { UserAuthProvider } from "./contexts/UserAuthContext";
import SingleProject from "./pages/SingleProject";
import ProjectList from "./components/ProjectList";
import { useEffect, useState } from "react";
import Projects from "./pages/Projects";
import User from "./pages/User";

function App() {
  const [awards, setAwards] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchProjects() {
      try {
        setIsLoading(true);

        const resProjects = await fetch(`/data/projects.json`);
        const projects = await resProjects.json();
        setProjects(projects);

        const resAwards = await fetch(`/data/awards.json`);
        const awards = await resAwards.json();
        setAwards(awards);
      } catch {
        new Error("there is a problem fetching data from server");
      } finally {
        setIsLoading(false);
      }
    }
    fetchProjects();
  }, []);
  return (
    <UserAuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />}>
            <Route
              index
              element={
                <ProjectList projects={projects} isLoading={isLoading} />
              }
            />
            <Route path=":id" element={<SingleProject projects={projects} />} />
          </Route>
          <Route path="awards" element={<Awards />}>
            <Route
              index
              element={<ProjectList projects={awards} isLoading={isLoading} />}
            />
            <Route path=":id" element={<SingleProject projects={awards} />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </UserAuthProvider>
  );
}

export default App;
