import React from "react"

import "../styles/resume.css"

import SEO from "../components/seo"

export default () => {
    return (
        <div class="resume">
            <SEO title="Resume" />

            <div class="resume-header">

                <div class="resume-header-content">
                    <div class="resume-name">Theo Lepage</div>
                    <div class="resume-description">Looking for an internship in <span class="resume-description-emphasize">Machine Learning / Computer Vision</span> starting in <span class="resume-description-emphasize">February 2022</span>.</div>
                    <div class="resume-contact">
                        <a class="resume-contact-item" target="_blank" rel="nofollow noopener noreferrer" href="https://www.google.com/maps/place/Paris/@48.864872,2.2183041,11z/data=!4m5!3m4!1s0x47e66e1f06e2b70f:0x40b82c3688c9460!8m2!3d48.856614!4d2.3522219">
                            <img class="resume-icon" src="/images/icons/icon-map_blue.svg" alt="icon-map" />
                            Paris, France
                        </a>

                        <a class="resume-contact-item" target="_blank" rel="nofollow noopener noreferrer" href="/">
                            <img class="resume-icon" src="/images/icons/icon-website.svg" alt="icon-website" />
                            theolepage.com
                        </a>

                        <a class="resume-contact-item" target="_blank" rel="nofollow noopener noreferrer" href="mailto:theo@theolepage.com">
                            <img class="resume-icon" src="/images/icons/icon-email.svg" alt="icon-email" />
                            theo@theolepage.com
                        </a>

                        <a class="resume-contact-item" target="_blank" rel="nofollow noopener noreferrer" href="tel:+33670097066">
                            <img class="resume-icon" src="/images/icons/icon-phone.svg" alt="icon-phone" />
                            +33 6 70 09 70 66
                        </a>

                        <a class="resume-contact-item" target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/in/theolepage/">
                            <img class="resume-icon" src="/images/icons/icon-linkedin.svg" alt="icon-linkedin" />
                            Theo Lepage
                        </a>
                    </div>
                </div>
            </div>

            <div class="resume-section resume-section_experience">
                <div class="resume-title">Professional experience</div>

                <div class="resume-experience">
                    <div class="resume-experience-content">
                        <div class="resume-experience-header">
                            <div class="resume-subtitle">
                                <span class="resume-emphasize">Research Student (Machine Learning)</span> at <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.lse.epita.fr/">LSE</a>
                            </div>
                            <div class="resume-experience-icons">
                                <div class="resume-location">
                                    <img class="resume-icon" src="/images/icons/icon-map.svg" alt="icon-map" />
                                    Paris, France
                                    </div>
                                <div class="resume-date">
                                    <img class="resume-icon" src="/images/icons/icon-calendar.svg" alt="icon-calendar" />
                                    Started Jan. 2020
                                    </div>
                            </div>
                        </div>
                        <div class="resume-text">
                            <ul>
                                <li>Working on "data-efficient" self-supervised methods applied to speaker and language recognition tasks.</li>
                                <li>Previously worked on a prototype of a self-driving car to compete the French <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.roboracingleague.com/">DIY Robocars</a> organized by Renault.</li>
                                <li>Reading and implementing recent publications in the field while doing monthly talks about my progress.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="resume-experience-image">
                        <img style={{width: '80%'}} src="/images/lse.png" alt="icon-lse" />
                    </div>
                </div>

                <div class="resume-experience">
                    <div class="resume-experience-content">
                        <div class="resume-experience-header">
                            <div class="resume-subtitle">
                                <span class="resume-emphasize">Software Developer Intern (Computational Imaging)</span> at <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.cnrs.fr/en">CNRS</a>
                            </div>
                            <div class="resume-experience-icons">
                                <div class="resume-location">
                                    <img class="resume-icon" src="/images/icons/icon-map.svg" alt="icon-map" />
                                    Paris, France
                                </div>
                                <div class="resume-date">
                                    <img class="resume-icon" src="/images/icons/icon-calendar.svg" alt="icon-calendar" />
                                    Sep. 2020 (5 months)
                                </div>
                            </div>
                        </div>
                        <div class="resume-text">
                            <ul>
                                <li>Contributed to a real-time retinal blood flow analysis software written in C++/CUDA and used for medical purpose.</li>
                                <li>Our work resulted in a 20x (500 to 10,000 FPS) speedup which improved substantially output images contrast.</li>
                                <li>The addition of test suites and the refactoring of main components allowed the project to become open source.</li>
                                <li>Founding member of the association, created as a result to sustain the development of the project.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="resume-experience-image">
                        <img style={{width: '75%'}} src="/images/cnrs.png" alt="logo-cnrs" />
                    </div>
                </div>

                <div class="resume-experience">
                    <div class="resume-experience-content">
                        <div class="resume-experience-header">
                            <div class="resume-subtitle">
                                <span class="resume-emphasize">Teaching Assistant</span> at <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.epita.fr/en">EPITA</a>
                            </div>
                            <div class="resume-experience-icons">
                                <div class="resume-location">
                                    <img class="resume-icon" src="/images/icons/icon-map.svg" alt="icon-map" />
                                    Paris, France
                                </div>
                                <div class="resume-date">
                                    <img class="resume-icon" src="/images/icons/icon-calendar.svg" alt="icon-calendar" />
                                    Sep. 2019 (10 months)
                                </div>
                            </div>
                        </div>
                        <div class="resume-text">
                            <ul>
                                <li>Taught C and Rust programming languages to second year students through weekly graded practicals.</li>
                                <li>Developed an intranet, based on a web app, to let other assistants test and evaluate student projects.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="resume-experience-image">
                        <img src="/images/epita.png" alt="icon-epita" />
                    </div>
                </div>
            </div >

            <div class="resume-section resume-education">
                <div class="resume-title">Education</div>

                <div class="resume-item">
                    <div class="resume-subtitle">
                        <span class="resume-emphasize"><a target="_blank" rel="nofollow noopener noreferrer" href="https://www.epita.fr/en">EPITA - École Pour l'Informatique et les Techniques Avancées</a></span>
                        &nbsp;(Engineering school)
                    </div>
                    <div class="resume-education-icons">
                        <div class="resume-location">
                            <img class="resume-icon" src="/images/icons/icon-map.svg" alt="icon-map" />
                            Paris, France
                        </div>
                        <div class="resume-date">
                            <img class="resume-icon" src="/images/icons/icon-calendar.svg" alt="icon-calendar" />
                            Sep. 2017 - Sep. 2022
                        </div>
                    </div>
                    <div class="resume-text">
                        <ul>
                            <li>Double specialization in image processing / machine learning and scientific research.</li>
                            <li>Developed a thorough knowledge in computer science through theoretical courses taught in English
                            (Linear algebra, Formal language, Probabilities, Statistics, Algorithmics, ...)
                            and various challenging group projects.</li>
                        </ul>
                    </div>
                </div>

                <div class="resume-item">
                    <div class="resume-subtitle">
                        <span class="resume-emphasize"><a target="_blank" rel="nofollow noopener noreferrer" href="https://csumb.edu/">CSUMB - California State University, Monterey Bay</a></span>
                        &nbsp;(Semester abroad)
                    </div>
                    <div class="resume-education-icons">
                        <div class="resume-location">
                            <img class="resume-icon" src="/images/icons/icon-map.svg" alt="icon-map" />
                            Northern California, USA
                        </div>
                        <div class="resume-date">
                            <img class="resume-icon" src="/images/icons/icon-calendar.svg" alt="icon-calendar" />
                            Jan. 2019 - Jun. 2019
                        </div>
                    </div>
                </div>
            </div>

            <div class="resume-section resume-projects">
                <div class="resume-title">Projects</div>

                <div class="resume-cols">
                    <div class="resume-col">
                        <div class="resume-item">
                            <div class="resume-subtitle resume-emphasize">
                                <img class="resume-icon" src="/images/icons/icon-project.svg" alt="icon-project" />
                                <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/theolepage/ssl-for-slr">SSL-for-SLR</a>
                            </div>
                            <div class="resume-text">
                                Collection of TensorFlow implementations of self-supervised models resulting in the classification of 2338 speakers while using 2x less labels compared to a supervised baseline.
                            </div>
                        </div>

                        <div class="resume-item">
                            <div class="resume-subtitle resume-emphasize">
                                <img class="resume-icon" src="/images/icons/icon-project.svg" alt="icon-project" />
                                <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/theolepage/chess">Chess (engine and AI)</a>
                            </div>
                            <div class="resume-text">
                                Chess engine highly optimized to generate the list of valid game moves as fast as possible.
                                Our artificial intelligence was able to easily reach the first quarter of the leaderboard.
                            </div>
                        </div>
                    </div>

                    <div class="resume-col">
                        <div class="resume-item">
                            <div class="resume-subtitle resume-emphasize">
                                <img class="resume-icon" src="/images/icons/icon-project.svg" alt="icon-project" />
                                <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/theolepage/prophecy">Prophecy</a>
                            </div>
                            <div class="resume-text">
                                Framework, made from scratch in C++ and CUDA, to build sequential deep neural networks through python bindings.
                                Currently handles dense and convolutional layers.
                            </div>
                        </div>

                        <div class="resume-item">
                            <div class="resume-subtitle resume-emphasize">
                                <img class="resume-icon" src="/images/icons/icon-project.svg" alt="icon-project" />
                                <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/theolepage/ray-tracer">Ray-tracer</a>
                            </div>
                            <div class="resume-text">
                                Ray-tracer, written in C++, featuring different objects, lightings, textures and scene configurations. Also supports bump mapping, AA, soft-shadows, DOF, multi-threading, ...
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="resume-section resume-interests-skills">
                <div class="resume-title">Interests and skills</div>

                <div class="resume-cols">
                    <div class="resume-col">
                        <div class="resume-item">
                            <div class="resume-subsubtitle">Programming languages / technologies</div>
                            <div class="resume-label">C / C++</div>
                            <div class="resume-label">C#</div>
                            <div class="resume-label">Java</div>
                            <div class="resume-label">Python</div>
                            <div class="resume-label">OCaml</div>
                            <div class="resume-label">PHP</div>
                            <div class="resume-label">JS</div>
                            <div class="resume-label">SQL</div>
                            <div class="resume-label">Bash</div>
                        </div>

                        <div class="resume-item resume-floating">
                            <div class="resume-subsubtitle">Certificates</div>
                            <div class="resume-label">Driving license</div>
                            <div class="resume-label">Sailing instructor diploma</div>
                        </div>
                    </div>

                    <div class="resume-col">
                        <div class="resume-item resume-floating">
                            <div class="resume-subsubtitle">Languages</div>
                            <div class="resume-label">English (TOEIC 905)</div>
                            <div class="resume-label">French</div>
                        </div>

                        <div class="resume-item">
                            <div class="resume-subsubtitle">Passions and interests</div>
                            <div class="resume-passion">
                                <img class="resume-icon resume-passion-icon" src="/images/icons/icon-science.svg" alt="icon-science" />
                                Science, robotics and AI
                            </div>
                            <div class="resume-passion">
                                <img class="resume-icon resume-passion-icon" src="/images/icons/icon-wave.svg" alt="icon-wave" />
                                Sailing
                            </div>
                            <div class="resume-passion">
                                <img class="resume-icon resume-passion-icon" src="/images/icons/icon-travel.svg" alt="icon-travel" />
                                Traveling
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="resume-footer">
                An up-to-date version of this document is available at <a target="_blank" rel="nofollow noopener noreferrer" href="/resume">theolepage.com/resume</a>.
            </div>

        </div >
    )
}