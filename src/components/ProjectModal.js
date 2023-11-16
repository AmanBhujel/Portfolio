import React, { useEffect, useRef, useState } from 'react';
import { useDarkMode } from '../contexts/DarkMode';
import { BsGithub } from 'react-icons/bs';
import { FiShare } from 'react-icons/fi';
const ProjectModal = ({ isOpen, onClose, name, image, techStacks, longDescription, githubLink, demoLink }) => {
    const { isDarkModeOpen } = useDarkMode();
    const modalRef = useRef();

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen]);


    return (
        <div className={`fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 ${isDarkModeOpen ? 'text-white' : ''} ${isOpen ? 'block' : 'hidden'}`}>
            <div ref={modalRef} className={`modal-container mx-auto p-4 max-w-lg mt-10 flex flex-col items-center justify-center z-30 border rounded-md ${isDarkModeOpen ? 'border-white bg-gray-800 ' : 'border-black bg-white'}`} style={{ maxHeight: '100vh' }}>
                <h2 className="text-2xl font-bold mb-4">{name}</h2>

                <img src={image} alt="Project" className="w-96 h-48 object-cover mb-4 border" />
                <div className="flex">
                    <p className={`mr-8 text-base  flex ${isDarkModeOpen ? 'text-gray-100' : 'text-gray-700'}`}>
                        Code
                        <a
                            href={githubLink}
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
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center text-lg cursor-pointer ml-2"
                        >
                            <FiShare />
                        </a>
                    </p>
                </div>

                {/* Tech Stacks */}
                <div className="mb-3">
                    <h3 className="text-md mb-2">Tech Stacks:{techStacks.join(', ')}</h3>
                </div>

                {/* Description */}
                <div className="mb-4 overflow-y-scroll max-h-60 scrollbar-hidden">
                    <h3 className="text-lg font-semibold mb-2">Description:</h3>
                    <p>{longDescription}</p>
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ProjectModal;
