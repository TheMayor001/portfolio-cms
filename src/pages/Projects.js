import './Projects.css';

function Projects() {
  const projectData = [
    {
      title: "Portfolio Website",
      description: "A personal website to showcase my work, built with React and CSS.",
    },
    {
      title: "Blog CMS",
      description: "A content management system for writing and publishing blog posts.",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app using OpenWeather API.",
    },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
// This Projects component displays a list of projects with titles and descriptions.