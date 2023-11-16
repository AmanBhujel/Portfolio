import htmlLogo from '../assets/Logos/HTML.png';
import cssLogo from '../assets/Logos/CSS.png';
import jsLogo from '../assets/Logos/Javascript.png';
import reactLogo from '../assets/Logos/React.png';
import nextjsLogo from '../assets/Logos/Nextjs.svg';
import tailwindLogo from '../assets/Logos/Tailwind.svg';
import Nodejs from '../assets/Logos/Nodejs.svg';
import Express from '../assets/Logos/Express.svg';
import MongoDB from '../assets/Logos/MongoDB.jpg';
import MySQL from '../assets/Logos/MySQL.png';
import Redis from '../assets/Logos/Redis.svg';
import Firebase from '../assets/Logos/firebase.svg';
import Jest from '../assets/Logos/jest.svg';
import Docker from '../assets/Logos/docker.svg';
import AWS from '../assets/Logos/AWS.svg';
import Github from '../assets/Logos/Github.svg';
import Figma from '../assets/Logos/figma.png';

const skillsData = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: jsLogo },
      { name: 'React', logo: reactLogo },
      { name: 'Next.js', logo: nextjsLogo },
      { name: 'Tailwind', logo: tailwindLogo },
      { name: 'Fabric js', logo: jsLogo },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: Nodejs },
      { name: 'Express.js', logo: Express },
      { name: 'Jest', logo: Jest },

    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', logo: MongoDB },
      { name: 'My SQL', logo: MySQL },
      { name: 'Redis', logo: Redis },
      { name: 'Firebase', logo: Firebase },
    ],
  },
  {
    title: 'Extra Skills',
    skills: [
      { name: 'Version Control (Git)', logo: Github },
      { name: 'Docker', logo: Docker },
      { name: 'AWS', logo: AWS },
      { name: 'Figma', logo: Figma },
    ],
  },

];

export default skillsData;
