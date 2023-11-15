import React, { useRef, useEffect, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiShare } from 'react-icons/fi';

import { useDarkMode } from '../contexts/DarkMode';
import ProjectModal from './ProjectModal';
import projects from '../data/ProjectData';

const Projects = () => {
    const projectRefs = [useRef(), useRef(), useRef(), useRef()];
    const [isVisible, setIsVisible] = useState(Array(projectRefs.length).fill(false));
    const { isDarkModeOpen } = useDarkMode();
    const [selectedProject, setSelectedProject] = useState(null);

    const handleLearnMoreClick = (index) => {
        setSelectedProject(projects[index]);
    };

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        projectRefs.forEach((ref, index) => {
            const rect = ref.current.getBoundingClientRect();
            const isVisibleNow = rect.top < windowHeight;
            setIsVisible((prev) => {
                const newVisibility = [...prev];
                newVisibility[index] = isVisibleNow;
                return newVisibility;
            });
        });
    };

    useEffect(() => {
        const scrollListener = () => {
            handleScroll();
        };
        window.addEventListener('scroll', scrollListener);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, []);



    return (
        <main id='Projects' className={`flex flex-col justify-center items-center ${isDarkModeOpen ? 'bg-gray-900 text-white lg:border-b border-slate-50' : 'bg-white lg:border-b border-black'}`}>
            <p className="text-4xl font-bold mb-5 mt-5 font-cursive">Projects</p>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`flex flex-col pt-3 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                        } pb-5 border-b-2 lg:border-b-0 ${isVisible[index] ? 'animated-top visible' : 'animated-top'
                        }`}
                >
                    <p className="font-bold font-josefin text-3xl flex items-center justify-center lg:hidden">
                        {project.name}
                    </p>
                    <div className="max-w-27rem m-2 flex items-center justify-center">
                        <img
                            ref={projectRefs[index]}
                            src={project.image}
                            alt={project.name}
                            className="w-27rem h-80  rounded-md m-3 border border-black"

                        />
                    </div>
                    <article className={`flex flex-col ml-0 lg:ml-2 items-center justify-center ${isDarkModeOpen ? 'text-gray-100' : 'text-gray-700'}`}>
                        <p className="hidden font-josefin lg:block text-3xl font-bold mb-2 ">
                            {project.name}
                        </p>
                        <p className={` text-base font-josefin w-11/12 md:w-9/12 lg:w-96 flex-wrap text-justify  ${isDarkModeOpen ? 'text-gray-100' : 'text-gray-700'}`}>
                            {project.description}
                            <span className="text-blue-500 cursor-pointer"
                                onClick={() => {
                                    handleLearnMoreClick(index); // Step 2
                                }}>
                                Learn More...
                            </span>
                        </p>

                        <div className="flex">
                            <p className={`mr-8 text-base  flex ${isDarkModeOpen ? 'text-gray-100' : 'text-gray-700'}`}>
                                Code
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center text-lg cursor-pointer ml-2"
                                >
                                    <BsGithub />
                                </a>
                            </p>
                            <p className={`text-base  flex ${isDarkModeOpen ? 'text-gray-100' : 'text-gray-700'}`}>
                                Live Demo
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center text-lg cursor-pointer ml-2"
                                >
                                    <FiShare />
                                </a>
                            </p>
                        </div>

                    </article>
                </div>
            ))}
            {selectedProject && (
                <ProjectModal
                    isOpen={true}
                    onClose={() => setSelectedProject(null)}
                    {...selectedProject}
                />
            )}
        </main>
    );
};

export default Projects;
