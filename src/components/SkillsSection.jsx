import React, { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
	// Databases
	{ name: "Python", level: 95, category: "Programming Languages" },
	{ name: "C++", level: 90, category: "Programming Languages" },
	// Frontend
	{ name: "HTML/CSS", level: 95, category: "frontend" },
	{ name: "JavaScript", level: 90, category: "frontend" },
	{ name: "React", level: 90, category: "frontend" },
	{ name: "TypeScript", level: 85, category: "frontend" },
	{ name: "Tailwind CSS", level: 90, category: "frontend" },
	{ name: "Next.js", level: 80, category: "frontend" },

	// Backend
	{ name: "Node.js", level: 80, category: "backend" },
	{ name: "Express", level: 75, category: "backend" },
	{ name: "PostgreSQL", level: 65, category: "backend" },
	{ name: "GraphQL", level: 60, category: "backend" },

	// Databases
	{ name: "MySQL", level: 90, category: "Databases" },
	{ name: "MongoDB", level: 70, category: "Databases" },
	{ name: "AWS SageMaker S3", level: 70, category: "Databases" },
	// Tools
	{ name: "Git/GitHub", level: 90, category: "tools" },
	{ name: "Docker", level: 70, category: "tools" },
	{ name: "Figma", level: 85, category: "tools" },
	{ name: "VS Code", level: 95, category: "tools" },
];

const categories = [
	"all",
	"Programming Languages",
	"frontend",
	"backend",
	"Databases",
	"tools",
];

const SkillsSection = () => {
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredSkills = skills.filter(
		(skill) => activeCategory === "all" || skill.category === activeCategory
	);

	return (
		<section id="skills" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center lg:block glowing-text">
					My{" "}
					<span className="text-primary" style={{ whiteSpace: "nowrap" }}>
						Skills
					</span>
				</h2>

				<div className="flex flex-wrap justify-center gap-4 mb-12">
					{categories.map((category, key) => (
						<button
							key={key}
							onClick={() => setActiveCategory(category)}
							className={cn(
								"px-5 py-2 rounded-full transition-colors duration-300 capitalize",
								activeCategory === category
									? "bg-primary text-primary-foreground"
									: "bg-secondary/70 text-foreground hover:bg-secondary"
							)}
						>
							{category}
						</button>
					))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredSkills.map((skill, key) => (
						<div
							key={key}
							className="bg-card p-6 rounded-lg shadow-xs card-hover flex items-center justify-center relative overflow-hidden"
							style={{
								backgroundImage: 'url("/projects/space.jpg")',
								backgroundSize: "cover",
								backgroundPosition: "center",
								minHeight: "140px",
							}}
						>
							<div className="absolute inset-0 bg-black/60 pointer-events-none" />
							<div className="relative w-full flex justify-center items-center">
								<h3 className="font-semibold text-lg text-center text-white z-10">
									{skill.name}
								</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;



