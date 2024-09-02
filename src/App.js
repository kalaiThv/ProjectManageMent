
import  { useState } from 'react';
import Details from './components/Details';
import LoginProject from './components/LoginProject';
import  Sidebar from './components/sidebar';
import './App.css';
import Tasks from './components/Tasks';


function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectScreen, setProjectScreen] = useState(false);

  const handleAddProject = () => {
    setProjectScreen(!projectScreen);
    setSelectedProject(null); // Reset selected project
  };

  const handleSaveProject = (newProject) => {
    if (selectedProject) 
    {
      const updatedProjects = projects.map((project) =>
        project === selectedProject ? { ...project, ...newProject } : project
      );
      setProjects(updatedProjects);
    } 
    else {
      setProjects([...projects, { ...newProject, tasks: [] }]);
    }
    setProjectScreen(false);
    setSelectedProject(null);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setProjectScreen(false);
  };

  const handleDeleteProject = (projectToDelete) => {
    setProjects(projects.filter(project => project !== projectToDelete));
    setSelectedProject(null);
  };

  const handleSaveTask = (updatedProject) => {
    const updatedProjects = projects.map((project) =>
      project === selectedProject ? updatedProject : project
    );
    setProjects(updatedProjects);
  };

  return (
    <div className="App">
      <header
        className="min-h-screen flex-col items-start px-80 justify-center text-gray-50 flex gap-8"
        style={{
          backgroundImage: `url("todo_bg.JPG")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Sidebar
          projects={projects}
          onAddProject={handleAddProject}
          onSelectProject={handleSelectProject}
          onDeleteProject={handleDeleteProject}
        />
        {projectScreen ? (
          <Details
            onSaveProject={handleSaveProject}
            onAddProject={handleAddProject}
            project={selectedProject}
          />
        ) : selectedProject ? (
          <Tasks project={selectedProject} onSaveTask={handleSaveTask} />
        ) : (
          <LoginProject onAddProject={handleAddProject} />
        )}
      </header>
    </div>
  );
}

export default App;
