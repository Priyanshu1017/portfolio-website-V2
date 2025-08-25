import { ArrowDown, ExternalLink, Github } from "lucide-react";
import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Chatify",
      description: "Lightweight real-time chat application (MERN-style) that lets users register, sign in, and manage personal conversations seamlessly and secure with a beautiful design.",
      image: "/projects/Chatify.png",
      tags: ["React", "TailwindCSS", "Node.js", "Socket.IO", "MongoDB"],
      demoUrl: "https://chatify-hfhk.onrender.com/",
      githurl: "https://github.com/Priyanshu1017/Chatify",
    },
    {
      id: 2,
      title: "Swiggy Scraper",
      description: " Engineered industrial-level web scraping scripts for Swiggy, Zomato, and Google Maps, achieving 95% data extraction accuracy using Selenium, Pandas, and BeautifulSoup.",
      image: "/projects/swiggy.png",
      tags: ["Python", "Selenium", "OpenCV", "BeautifulSoup", "Pandas"],
      // demoUrl: "https://staynest-tq1y.onrender.com/listings",
      githurl: "https://github.com/Priyanshu1017/swiggy",
    },
    {
      id: 3,
      title: "Diary",
      description: "Built A full-stack diary application (MERN-style) that lets users register, sign in, and manage personal notes securely from a React frontend with an Express + MongoDB backend.",
      image: "/projects/Diary.png",
      tags: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
      demoUrl: "https://diary-54ne.onrender.com/",
      githurl: "https://github.com/Priyanshu1017/Diary",
    },
  ];

  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center lg:block glowing-text">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 box-shadow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githurl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Priyanshu1017"
          >
            Check My Github <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

