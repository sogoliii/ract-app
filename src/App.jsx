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

const projectAwards = [
  {
    name: "Elahieh Renovation",
    id: "elahiehRenovation",
    img: "public/ElahieRenovation/project.jpg",
    images: [
      {
        original: "/public/ElahieRenovation/cover.jpg",
        thumbnail: "/public/ElahieRenovation/cover.thumbnail.jpg",
      },
      {
        original: "/public/ElahieRenovation/1.original.jpg",
        thumbnail: "/public/ElahieRenovation/1.thumbnail.jpg",
        fullscreen: "/public/ElahieRenovation/1.jpg",
      },
      {
        original: "/public/ElahieRenovation/2.original.jpg",
        thumbnail: "/public/ElahieRenovation/2.thumbnail.jpg",
        fullscreen: "/public/ElahieRenovation/2.jpg",
      },
      {
        original: "/public/ElahieRenovation/3.original.jpg",
        thumbnail: "/public/ElahieRenovation/3.thumbnail.jpg",
        fullscreen: "/public/ElahieRenovation/3.jpg",
      },
      {
        original: "/public/ElahieRenovation/4.original.jpg",
        thumbnail: "/public/ElahieRenovation/4.thumbnail.jpg",
        fullscreen: "/public/ElahieRenovation/4.jpg",
      },
      {
        original: "/public/ElahieRenovation/5.original.jpg",
        thumbnail: "/public/ElahieRenovation/5.thumbnail.jpg",
        fullscreen: "/public/ElahieRenovation/5.jpg",
      },
      {
        original: "/public/ElahieRenovation/6.original.jpg",
        thumbnail: "/public/ElahieRenovation/6.thumbnail.jpg",
        fullscreen: "/public/ElahieRenovation/6.jpg",
      },
      {
        original: "/public/ElahieRenovation/7.original.jpg",
        thumbnail: "/public/ElahieRenovation/7.thumbnail.jpg",
        fullscreen: "/public/ElahieRenovation/7.JPG",
      },
      {
        original: "/public/ElahieRenovation/8.original.jpg",
        thumbnail: "/public/ElahieRenovation/8.thumbnail.jpg",
        fullscreen: "/public/ElahieRenovation/8.JPG",
      },
      {
        original: "/public/ElahieRenovation/9.original.jpg",
        thumbnail: "/public/ElahieRenovation/9.thumbnail.jpg",
        fullscreen: "/public/ElahieRenovation/9.jpg",
      },
      {
        original: "/public/ElahieRenovation/10.original.jpg",
        thumbnail: "/public/ElahieRenovation/10.thumbnail.jpg",
        fullscreen: "/public/ElahieRenovation/10.jpg",
      },
      {
        original: "/public/ElahieREnovation/11.original.jpg",
        thumbnail: "/public/ElahieREnovation/11.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/11.JPG",
      },
      {
        original: "/public/ElahieREnovation/12.original.jpg",
        thumbnail: "/public/ElahieREnovation/12.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/12.jpg",
      },
      {
        original: "/public/ElahieREnovation/13.original.jpg",
        thumbnail: "/public/ElahieREnovation/13.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/13.jpg",
      },
      {
        original: "/public/ElahieREnovation/14.original.jpg",
        thumbnail: "/public/ElahieREnovation/14.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/14.jpg",
      },
      {
        original: "/public/ElahieREnovation/15.original.jpg",
        thumbnail: "/public/ElahieREnovation/15.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/15.jpg",
      },
      {
        original: "/public/ElahieREnovation/16.original.jpg",
        thumbnail: "/public/ElahieREnovation/16.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/16.jpg",
      },
      {
        original: "/public/ElahieREnovation/17.original.jpg",
        thumbnail: "/public/ElahieREnovation/17.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/17.jpg",
      },
      {
        original: "/public/ElahieREnovation/18.original.jpg",
        thumbnail: "/public/ElahieREnovation/18.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/18.jpg",
      },
      {
        original: "/public/ElahieREnovation/19.original.jpg",
        thumbnail: "/public/ElahieREnovation/19.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/19.jpg",
      },
      {
        original: "/public/ElahieREnovation/20.original.jpg",
        thumbnail: "/public/ElahieREnovation/20.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/20.jpg",
      },
      {
        original: "/public/ElahieREnovation/21.original.jpg",
        thumbnail: "/public/ElahieREnovation/21.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/21.jpg",
      },
      {
        original: "/public/ElahieREnovation/22.original.jpg",
        thumbnail: "/public/ElahieREnovation/22.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/22.jpg",
      },
      {
        original: "/public/ElahieREnovation/23.original.jpg",
        thumbnail: "/public/ElahieREnovation/23.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/23.jpg",
      },
      {
        original: "/public/ElahieREnovation/24.original.jpg",
        thumbnail: "/public/ElahieREnovation/24.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/24.jpg",
      },
      {
        original: "/public/ElahieREnovation/25.original.jpg",
        thumbnail: "/public/ElahieREnovation/25.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/25.jpg",
      },
      {
        original: "/public/ElahieREnovation/26.original.jpg",
        thumbnail: "/public/ElahieREnovation/26.thumbnail.jpg",
        fullscreen: "/public/ElahieREnovation/26.jpg",
      },
    ],
  },
  {
    name: "Lavasan Suite",
    id: "lavasanSuite",
    img: "public/LavasunSuite/project.png",
    images: [
      {
        original: "/public/LavasunSuite/cover.jpg",
        thumbnail: "/public/LavasunSuite/cover.thumbnail.jpg",
      },
      {
        original: "/public/LavasunSuite/1.original.jpg",
        thumbnail: "/public/LavasunSuite/1.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/1.jpg",
      },
      {
        original: "/public/LavasunSuite/2.original.jpg",
        thumbnail: "/public/LavasunSuite/2.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/2.jpg",
      },
      {
        original: "/public/LavasunSuite/3.original.jpg",
        thumbnail: "/public/LavasunSuite/3.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/3.jpg",
      },
      {
        original: "/public/LavasunSuite/4.original.jpg",
        thumbnail: "/public/LavasunSuite/4.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/4.jpg",
      },
      {
        original: "/public/LavasunSuite/5.original.jpg",
        thumbnail: "/public/LavasunSuite/5.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/5.jpg",
      },
      {
        original: "/public/LavasunSuite/6.original.jpg",
        thumbnail: "/public/LavasunSuite/6.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/6.jpg",
      },
      {
        original: "/public/LavasunSuite/7.original.jpg",
        thumbnail: "/public/LavasunSuite/7.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/7.jpg",
      },
      {
        original: "/public/LavasunSuite/8.original.jpg",
        thumbnail: "/public/LavasunSuite/8.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/8.jpg",
      },
      {
        original: "/public/LavasunSuite/9.original.jpg",
        thumbnail: "/public/LavasunSuite/9.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/9.jpg",
      },
      {
        original: "/public/LavasunSuite/10.original.jpg",
        thumbnail: "/public/LavasunSuite/10.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/10.jpg",
      },
      {
        original: "/public/LavasunSuite/11.original.jpg",
        thumbnail: "/public/LavasunSuite/11.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/11.jpg",
      },
      {
        original: "/public/LavasunSuite/12.original.jpg",
        thumbnail: "/public/LavasunSuite/12.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/12.jpg",
      },
      {
        original: "/public/LavasunSuite/13.original.jpg",
        thumbnail: "/public/LavasunSuite/13.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/13.png",
      },
      {
        original: "/public/LavasunSuite/14.original.jpg",
        thumbnail: "/public/LavasunSuite/14.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/14.png",
      },
      {
        original: "/public/LavasunSuite/15.original.jpg",
        thumbnail: "/public/LavasunSuite/15.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/15.png",
      },
      {
        original: "/public/LavasunSuite/16.original.jpg",
        thumbnail: "/public/LavasunSuite/16.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/16.jpg",
      },
      {
        original: "/public/LavasunSuite/17.original.jpg",
        thumbnail: "/public/LavasunSuite/17.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/17.png",
      },
      {
        original: "/public/LavasunSuite/18.original.jpg",
        thumbnail: "/public/LavasunSuite/18.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/18.jpg",
      },
      {
        original: "/public/LavasunSuite/19.original.jpg",
        thumbnail: "/public/LavasunSuite/19.thumbnail.jpg",
        fullscreen: "/public/LavasunSuite/19.jpg",
      },
    ],
  },
  {
    name: "Kish Entertainment Center",
    id: "kishEntertainmentCenter",
    img: "public/KishCenter/project.JPG",
    images: [
      {
        original: "public/KishCenter/cover.jpg",
        thumbnail: "public/KishCenter/cover.thumbnail.jpg",
      },
      {
        original: "public/KishCenter/1.original.jpg",
        thumbnail: "public/KishCenter/1.thumbnail.jpg",
        fullscreen: "public/KishCenter/1.png",
      },
      {
        original: "public/KishCenter/2.original.jpg",
        thumbnail: "public/KishCenter/2.thumbnail.jpg",
        fullscreen: "public/KishCenter/2.png",
      },
      {
        original: "public/KishCenter/3.original.jpg",
        thumbnail: "public/KishCenter/3.thumbnail.jpg",
        fullscreen: "public/KishCenter/3.png",
      },
      {
        original: "public/KishCenter/4.original.jpg",
        thumbnail: "public/KishCenter/4.thumbnail.jpg",
        fullscreen: "public/KishCenter/4.JPG",
      },
      {
        original: "public/KishCenter/5.original.jpg",
        thumbnail: "public/KishCenter/5.thumbnail.jpg",
        fullscreen: "public/KishCenter/5.png",
      },
      {
        original: "public/KishCenter/6.original.jpg",
        thumbnail: "public/KishCenter/6.thumbnail.jpg",
        fullscreen: "public/KishCenter/6.jpg",
      },
      {
        original: "public/KishCenter/7.original.jpg",
        thumbnail: "public/KishCenter/7.thumbnail.jpg",
        fullscreen: "public/KishCenter/7.png",
      },
      {
        original: "public/KishCenter/8.original.jpg",
        thumbnail: "public/KishCenter/8.thumbnail.jpg",
        fullscreen: "public/KishCenter/8.png",
      },
      {
        original: "public/KishCenter/9.original.jpg",
        thumbnail: "public/KishCenter/9.thumbnail.jpg",
        fullscreen: "public/KishCenter/9.png",
      },
      {
        original: "public/KishCenter/10.original.jpg",
        thumbnail: "public/KishCenter/10.thumbnail.jpg",
        fullscreen: "public/KishCenter/10.jpeg",
      },
      {
        original: "public/KishCenter/11.original.jpg",
        thumbnail: "public/KishCenter/11.thumbnail.jpg",
        fullscreen: "public/KishCenter/11.jpg",
      },
      {
        original: "public/KishCenter/12.original.jpg",
        thumbnail: "public/KishCenter/12.thumbnail.jpg",
        fullscreen: "public/KishCenter/12.jpg",
      },
      {
        original: "public/KishCenter/13.original.jpg",
        thumbnail: "public/KishCenter/13.thumbnail.jpg",
        fullscreen: "public/KishCenter/13.jpg",
      },
      {
        original: "public/KishCenter/14.original.jpg",
        thumbnail: "public/KishCenter/14.thumbnail.jpg",
        fullscreen: "public/KishCenter/14.jpg",
      },
      {
        original: "public/KishCenter/15.original.jpg",
        thumbnail: "public/KishCenter/15.thumbnail.jpg",
        fullscreen: "public/KishCenter/15.jpg",
      },
    ],
  },
  {
    name: "Bastak Plaza",
    id: "bastak",
    img: "public/BastakPlaza/project.jpg",
    images: [
      {
        original: "public/BastakPlaza/cover.jpg",
        thumbnail: "public/BastakPlaza/cover.thumbnail.jpg",
      },
      {
        original: "public/BastakPlaza/1.original.jpg",
        thumbnail: "public/BastakPlaza/1.thumbnail.jpg",
        fullscreen: "public/BastakPlaza/1.jpg",
      },
      {
        original: "public/BastakPlaza/2.original.jpg",
        thumbnail: "public/BastakPlaza/2.thumbnail.jpg",
        fullscreen: "public/BastakPlaza/2.jpg",
      },
      {
        original: "public/BastakPlaza/3.original.jpg",
        thumbnail: "public/BastakPlaza/3.thumbnail.jpg",
        fullscreen: "public/BastakPlaza/3.jpg",
      },
      {
        original: "public/BastakPlaza/4.original.jpg",
        thumbnail: "public/BastakPlaza/4.thumbnail.jpg",
        fullscreen: "public/BastakPlaza/4.jpg",
      },
      {
        original: "public/BastakPlaza/5.original.jpg",
        thumbnail: "public/BastakPlaza/5.thumbnail.jpg",
        fullscreen: "public/BastakPlaza/5.jpg",
      },
      {
        original: "public/BastakPlaza/6.original.jpg",
        thumbnail: "public/BastakPlaza/6.thumbnail.jpg",
        fullscreen: "public/BastakPlaza/6.jpg",
      },
      {
        original: "public/BastakPlaza/7.original.jpg",
        thumbnail: "public/BastakPlaza/7.thumbnail.jpg",
        fullscreen: "public/BastakPlaza/7.jpg",
      },
    ],
  },
];
function App() {
  const [projects, setProjects] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchProjects() {
      try {
        setIsLoading(true);
        const res = await fetch(`/data/projects.json`);
        const data = await res.json();
        setProjects(data);
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
            <Route index element={<ProjectList projects={projectAwards} />} />
            <Route
              path=":id"
              element={<SingleProject projects={projectAwards} />}
            />
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
