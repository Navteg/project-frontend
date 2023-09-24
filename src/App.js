import { useEffect, useState } from "react";

import ProjectCard from "./components/project-card";
import { getData } from "./repositories/get-data";
import ProjectDetails from "./components/project-details";
import "./App.css";
import FilterProject from "./components/filter-project";
import { useDebouncedEffect } from "./utils/use-debounced";
import {
  FRONTEND_FILTER,
  TITLE_FILTER,
  BACKEND_FILTER
} from "./utils/constant";

function App() {
  const [projects, setProjects] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const [titleFilter, setTitleFilter] = useState("");
  const [frontendFilter, setFrontendFilter] = useState("");
  const [backendFilter, setBackendFilter] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const toggleDetail = function (project) {
    setShowDetails(!showDetails);
    setSelectedProject(project || {});
  };

  const setFilterData = function (type, data) {
    switch (type) {
      case TITLE_FILTER:
        setTitleFilter(data);
        break;
      case FRONTEND_FILTER:
        setFrontendFilter(data);
        break;
      case BACKEND_FILTER:
        setBackendFilter(data);
        break;
      default:
        break;
    }
  };

  const fetchData = async function () {
    setLoading(true);
    const { data } = await getData({
      titleFilter,
      frontendFilter,
      backendFilter
    });
    setLoading(false);
    setProjects(data);
  };

  useDebouncedEffect(
    () => {
      fetchData();
    },
    500,
    [titleFilter, frontendFilter, backendFilter]
  );

  return (
    <div className="app">
      <div className="filter">
        <FilterProject
          setFilterData={setFilterData}
          title={titleFilter}
          frontend={frontendFilter}
          backend={backendFilter}
        />
      </div>
      <div className="card-row">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={toggleDetail}
            />
          ))
        ) : (
          <span className="no-data">
            {loading ? "Loading..." : "No data found"}
          </span>
        )}
      </div>
      {showDetails && (
        <div
          className={`${
            showDetails ? "modal display-block" : "modal display-none"
          }`}
        >
          <section className="modal-main">
            <ProjectDetails project={selectedProject} onClose={toggleDetail} />
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
