import React from "react";
import { Briefcase, Code, User } from "lucide-react";
const Experience = () => {
    return (
        
        <div>
            {/* <div class="hidden lg:block glowing-ball absolute bottom-[10rem] lg:bottom-[12rem] -right-72 lg:p-72"> */}
                <section id="about" className="py-24 px-4 relative">
                    {""}
                    <div className="container mx-auto max-w-5xl ">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center lg:block glowing-text">
                            Exper<span className="text-primary">ience</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
                        <div className="space-y-6 glowing-ball">
                                <h3 className="text-2xl font-semibold">
                                    Software Development Engineer (SDE) Intern 
                                </h3>
                                <span className="text-primary font-semibold">CRUV Dimension Pvt. Ltd. </span>
                                <p className="text-muted-foreground">
                                    {" "}
                                    Aug 2023 - May 2024
                                </p>
                                <p className="text-muted-foreground">
                                    {" "}
                                    CRUV is an investment firm that offers support to ventures by leveraging our fine-tuned machinery of resources and talent into building high-novelty digital solutions. Join us and be a part of our adrenaline filled team to build next-gen digital products.
                                </p>
                            
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover container-bg ">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-full bg-primary/10">
                                            <Code className="h-6 w-6 text-primary" />
                                        </div>
                                    <div className="text-left" style={{ marginLeft: "1.6rem" }}>
                                            <h4 className="font-semibold text-lg ">My work at CRUV</h4>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="gradient-border p-6 card-hover container-bg ">
                                    <div className="flex items-start gap-4">
                                        <div className="text-left">
                                            <p className="text-muted-foreground ">
                                                Developed and optimized web scrapers using Python, Selenium, and BeautifulSoup, extracting valuable insights from online data sources and improving data accuracy by 95%. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="gradient-border p-6 card-hover container-bg ">
                                    <div className="flex items-start gap-4">
                                        <div className="text-left">
                                            <p className="text-muted-foreground">
                                                Processed and analyzed large datasets using Pandas and NumPy to drive data-driven decision-making. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="gradient-border p-6 card-hover container-bg ">
                                    <div className="flex items-start gap-4">
                                        <div className="text-left">
                                            <p className="text-muted-foreground">
                                                Implemented CI/CD pipelines using GitHub and Docker, improving deployment efficiency.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="gradient-border p-6 card-hover container-bg ">
                                    <div className="flex items-start gap-4">
                                        <div className="text-left">
                                            <p className="text-muted-foreground">
                                                Conducted code reviews and testing, improving code efficiency and maintainability across various development projects. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        // </div>
    );
};

export default Experience;
