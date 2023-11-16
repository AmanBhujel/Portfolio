import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container font-josefin mx-auto sm:flex sm:justify-between sm:items-center">
                <div className="text-center sm:text-left mt-2  mb-5">
                    <p className="text-sm">Web Developer | Lifelong Learner</p>
                </div>

                <div className="flex justify-center sm:justify-end items-center mt-2 sm:mr-5 mb-5">
                    <p className="mr-4">Links:</p>
                    <a
                        href="https://www.linkedin.com/in/aman-bhujel-75263625b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl lg:text-3xl hover:cursor-pointer hover:text-blue-500 mr-3 transition duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/AmanBhujel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl lg:text-3xl hover:cursor-pointer hover:text-gray-500 mr-3 transition duration-300"
                    >
                        <FaGithubSquare />
                    </a>
                    <a
                        href="mailto:bhujelaman20@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl lg:text-3xl hover:cursor-pointer hover:text-red-500 transition duration-300"
                    >
                        <MdEmail />
                    </a>
                </div>

                <div className="text-center mt-4">
                    <p className="text-sm">&copy; 2023 Aman Bhujel. All Rights Reserved.</p>
                    <a href="/privacy-policy" className="text-sm text-gray-400 hover:underline">
                        Privacy Policy
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
