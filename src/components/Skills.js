import React, { useEffect, useRef, useState } from 'react';
import '../styles/animation.css';
import { useDarkMode } from '../contexts/DarkMode';
import skillsData from '../data/SkillsData';

const Skills = () => {
  const skillsRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const { isDarkModeOpen } = useDarkMode();

  const handleScroll = () => {
    if (skillsRef.current) {
      const elementTop = skillsRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      setIsAnimated(elementTop < windowHeight);
    }
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
    <div id='Skills' className={`py-10 border-b-2 ${isDarkModeOpen ? 'bg-gray-900 text-white border-gray-300' : 'bg-white border-gray-950'}`} ref={skillsRef}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-cursive flex justify-center items-center font-bold mb-10">Skills</h2>
        <div className={`grid grid-cols-1 m-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 ${isAnimated ? 'animated-top visible' : 'animated-top'}`}>
          {skillsData.map((skillGroup, index) => (
            <div key={index} className={`border-2 p-4 rounded-lg ${isDarkModeOpen ? 'shadow-gray-500 shadow-md hover:shadow-xl' : 'shadow-md hover:shadow-xl'}`}>
              <h3 className="text-xl font-josefin font-semibold">{skillGroup.title}</h3>
              <ul className="mt-2 list-disc space-y-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <img src={skill.logo} className="w-5 h-5 mr-2" alt={`${skill.name} logo`} />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
