import Profile from '../assets/Profile.jpeg';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from 'react';
import '../styles/animation.css'
import { useDarkMode } from '../contexts/DarkMode';

const Herosection = () => {
    const [isAnimated, setIsAnimated] = useState(false);
    const { isDarkModeOpen } = useDarkMode();

    useEffect(() => {
        setIsAnimated(true);
    }, []);

    return (
        <main id='About' className={`h-auto sm:h-35rem w-full border-b-2 flex items-center justify-center ${isDarkModeOpen ? 'bg-gray-900 text-white  border-gray-300' : 'bg-white  border-gray-950'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center w-full h-full">
                <section className={`w-full sm:w-1/2 h-min flex flex-col items-center justify-center ${isAnimated ? 'animated-right visible' : 'animated-right'}`}>
                    <img
                        className="w-64 min-w-64 h-64 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-2 mt-2"
                        src={Profile}
                        alt="aman"
                    />
                    <h1 className="text-3xl mt-2 font-montserrat font-semibold text-black-500">Aman Bhujel</h1>
                    <p className="text-sm mt-1 font-montserrat font-bold text-gray-500">Jr. Full-Stack Web Developer</p>
                </section>
                <section className={`w-full sm:w-1/2 flex flex-col items-center justify-center sm:items-start sm:justify-center h-full ${isAnimated ? 'animated-left visible' : 'animated-left'}`}>
                    <p className="hidden font-cursive sm:block text-2xl font-semibold text-gray-500 justify-center items-center mb-2">
                        About Me:
                    </p>
                    <p className="mt-0 sm:mt-2 flex flex-wrap w-11/12 text-justify md:w-10/12 font-montserrat">
                    I am a dedicated full-stack web developer with over a year of hands-on experience in crafting innovative and impactful digital solutions. My journey in web development has equipped me with a solid foundation in front-end and back-end technologies, enabling me to bring ideas to life through well-designed, efficient, and scalable code. Always eager to take on new challenges, I am open to exciting job opportunities and collaborative projects that allow me to contribute my skills and expertise to the ever-evolving world of web development.                    </p>
                    <div className="flex justify-center items-center mt-2 mb-5">
                        <a
                            href="https://www.linkedin.com/in/aman-bhujel-75263625b/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl hover:cursor-pointer hover:text-blue-500 mr-3 transition duration-300"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/AmanBhujel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl hover:cursor-pointer hover:text-gray-500 mr-3 transition duration-300"
                        >
                            <FaGithubSquare />
                        </a>
                        <a
                            href="mailto:bhujelaman20@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-3xl  hover:cursor-pointer hover:text-red-500 transition duration-300"
                        >
                            <MdEmail />
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Herosection;
