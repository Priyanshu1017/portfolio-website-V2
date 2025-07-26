import React from "react";
import { Briefcase, Code, User } from "lucide-react";
const AboutMe = () => {
  return (
    <div>
      <section id="about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center lg:block glowing-text">
            About<span className="text-primary">Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center  ">
            <div className="space-y-6 glowing-ball">
              <h3 className="text-2xl font-semibold">
                Passionate web developer and software engineer
              </h3>
              <div class="lg:block ">
                <p className="text-muted-foreground">
                  {" "}
                  I'm an enthusiastic full-stack developer skilled in building
                  responsive, accessible, and high-performance web applications
                  using modern front-end and back-end technologies.
                </p>
                <p className="text-muted-foreground">
                  I'm passionate about creating elegant solutions to complex
                  problems, and I'm constantly learning new technologies and
                  techniques to stay at the forefront of the ever-evolving web
                  landscape.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  {""} Get in Touch
                </a>
                <a
                   href="Priyanshu_Pathak_Resume.pdf"
                   download="Priyanshu_Pathak_Resume"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover  container-bg">
                <div className="flex items-start gap-4 ">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Devlopment</h4>
                    <p className="text-muted-foreground">
                      Creating responsive websites and web applications with
                      mordern frameworks
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover  container-bg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Software Development</h4>
                    <p className="text-muted-foreground">
                      Building robust software solutions with a focus on
                      performance and scalability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover  container-bg">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Project Management
                    </h4>
                    <p className="text-muted-foreground">
                      Leading projects from conception to completion with agile
                      methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
