import { ArrowDown, ExternalLink, Github } from "lucide-react";
import React from "react";

const Achievement = () => {
    const projects = [
        {
            id: 1,
            title: "GATE CSE 2025",
            description: "Qualified GATE 2025 in Computer Science & IT, demonstrating strong analytical and problem-solving skills. This achievement highlights my dedication and expertise in core computer science concepts.",
            image: "/projects/gate2025.jpeg",
            tags: [ "IIT Roorkee","GATE CSE"],
            demoUrl: "",
        },
        {
            id: 2,
            title: "Programming, Data Structures and Algorithms using Python",
            description: "Acquired knowledge of Data structures and Algorithms. Implemented the learnings to write efficient and fast code.",
            image: "/projects/Programming, Data Structures and Algorithms using Python.jpg",
            tags: ["SWAYAM/NPTEL", "Python"],
            demoUrl: "https://priyanshu1017.github.io/portfolio-website/Programming,%20Data%20Structures%20and%20Algorithms%20using%20Python.jpg",
        },
        {
            id: 3,
            title: "Design and analysis of algorithm",
            description: "Learned about different algorithm and learned to use them effectively. Strengthened my problem-solving abilities in the real-world scenarios.",
            image: "/projects/Design and analysis of algorithm.jpg",
            tags: ["SWAYAM/NPTEL", "DSA","Algorithm"],
            demoUrl: "https://priyanshu1017.github.io/portfolio-website/Design%20and%20analysis%20of%20algorithm.jpg",
        },
    ];

    return (
        <section id="project" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center glowing-ball ">
                    Achievement a<span className="text-primary">nd Certificates</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent Achievement and Certificates. Each of them represents a significant milestone in my learning journey. I have put in a lot of effort to achieve these, and they reflect my commitment to continuous learning and improvement.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                
            </div>
        </section>
    );
};

export default Achievement;

